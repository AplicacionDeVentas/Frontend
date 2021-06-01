import React, { useState, useEffect } from 'react'
import md5 from 'crypto-js/md5'
import { useAuth } from '../../Providers/AuthProviders'
import { db } from '../../config/FirebaseConfig'
import InputButton from '../../Utils/InputButton/InputButton'
import InputField from '../../Utils/InputField/InputField'

import './ShoppingCartPage.scss'

const ShoppingCartPage = () => {
  const { userData } = useAuth()

  const [productsInfo, setProductsInfo] = useState([])
  const [billingData, setBillingData] = useState({})

  useEffect(() => {
    if (userData && userData.cart && productsInfo.length === 0) {
      getProductsInfo(userData.cart)
    }
    if (productsInfo.length > 0) {
      getBillingData()
    }
  }, [userData, productsInfo])
  
  const getProductsInfo = async (products) => {
    const productsInfo = []
    for (let i = 0; i < products.length; i++) {
      const product = userData.cart[i];
      await product.productPath.get().then(res => {
        const tempData = res.data()
        productsInfo.push({...tempData})
      })
    }
    setProductsInfo(productsInfo)
  }

  const getBillingData = () => {
    setBillingData({
      merchantId: process.env.REACT_APP_PAYU_MERCHANT_ID,
      accountId: process.env.REACT_APP_PAYU_ACCOUNT_ID,
      currency: process.env.REACT_APP_PAYU_CURRENCY,
      referenceCode: getReferenceCode(),
      apiKey: process.env.REACT_APP_PAYU_API_KEY,
      signature: getHashedString(),
      description: `Compra ${getTotalProducts()} ${getTotalProducts() > 1 ? 'Maceticas': 'Macetica'}`,
      amount: getBillingTotal(),
      tax: getTax(),
      taxReturnBase: getTaxReturnBase(),
      buyerFullName: `${userData.name} ${userData.lastname}`,
      buyerEmail: `${userData.email}`,
      shippingAddress: getShippingInfo('address'),
      shippingCity: getShippingInfo('city'),
      shippingCountry: 'CO',
      telephone: getShippingInfo('phoneNumber')
    })
  }

  const getTotalProducts = () => {
    let products = 0
    userData.cart.map(product => {
      products += product.amount
    })
    return products
  }
  
  const getBillingTotal = () => {
    let total = 0
    if (productsInfo.length) {
      productsInfo.map((product, index) => {
        total += product.price * userData.cart[index].amount
      })
      return total
    }
    else {
      return null
    }
  }

  const getTax = () => {
    const total = getBillingTotal()
    const tax = Math.round((total / 1.19) * 0.19)
    return tax
  }

  const getTaxReturnBase = () => {
    const tax = getTax()
    const taxReturnBase = getBillingTotal() - tax
    return taxReturnBase
  }
  
  /**
   * Gets shipping information from the user.
   * @param {String} infoType 
   * @returns {String} The infoType information
   */
  const getShippingInfo = (infoType) => {
    let shippingInfo
    userData.addresses.map(addressObject => {
      if (addressObject.active) {
        shippingInfo = addressObject[infoType]
      }
    })
    return shippingInfo
  }

  const getHashedString = () => {
    const price = getBillingTotal().toString()
    const stringToHash = `${process.env.REACT_APP_PAYU_API_KEY}~${process.env.REACT_APP_PAYU_MERCHANT_ID}~${getReferenceCode()}~${price}~${process.env.REACT_APP_PAYU_CURRENCY}`
    const hashed = md5(stringToHash)
    return hashed.toString()
  }

  const getReferenceCode = () => {
    return 'Testing 2543525'
  }


  return (
    userData ?
    <>
      <div className="container shopping-cart">
        <form method="post" action="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/">
          <div className="billing-details column">
            <h1>Información de Pago</h1>
            {
              billingData && userData ?
              <>
                <input type="hidden" name="merchantId" value={billingData.merchantId}/>
                <input type="hidden" name="ApiKey" value={billingData.apikey}/>
                <input type="hidden" name="accountId" value={billingData.accountId}/>
                <input type="hidden" name="description" value={billingData.description}/>
                <input type="hidden" name="referenceCode" value={billingData.referenceCode}/>
                <input type="hidden" name="amount" value={billingData.amount}/>
                <input type="hidden" name="tax" value={billingData.tax}/>
                <input type="hidden" name="taxReturnBase" value={billingData.taxReturnBase}/>
                <input type="hidden" name="currency" value={billingData.currency}/>
                <input type="hidden" name="signature" value={billingData.signature}/>
                <input type="hidden" name="test" value="1"/>
                <label htmlFor="buyerFullName">Titular de Pago:</label>
                <InputField
                  id="buyerFullName"
                  type="text"
                  name="buyerFullName"
                  value={billingData.buyerFullName}
                  placeholder="Titular de Pago"
                  onChange={(e) => setBillingData({...billingData, buyerFullName: e.target.value})}
                />
                <label htmlFor="buyerEmail">Correo Electrónico:</label>
                <InputField
                  id="buyerEmail"
                  type="text"
                  name="buyerEmail"
                  placeholder="Correo Electrónico"
                  value={billingData.buyerEmail}
                  onChange={(e) => setBillingData({...billingData, buyerEmail: e.target.value})}
                />
                <label htmlFor="telephone">Telefono:</label>
                <InputField
                  id="telephone"
                  type="text"
                  name="telephone"
                  placeholder="Telefono"
                  value={billingData.telephone}
                  onChange={(e) => setBillingData({...billingData, telephone: e.target.value})}
                />
                <p>Direcciones:</p>
                {
                  userData.addresses.map((address, index) => (
                    <>
                      <input key={index} id={`${index}-address`} type="radio" name="shippingAddress" value={address.address} defaultChecked={address.active}/>
                      <label key={index} htmlFor={`${index}-address`}>{address.address}</label><br/>
                    </>
                  ))
                }
                {/* <input type="hidden" name="shippingAddress" value={billingData.shippingAddress}/> */}
                <input type="hidden" name="shippingCity" value={billingData.shippingCity}/>
                <input type="hidden" name="shippingCountry" value={billingData.shippingCountry}/>
                <input type="hidden" name="responseUrl" value="http://localhost:3000/#/success-buy"/>
              </>
              :
              <>
              </>
            }
          </div>
          <div className="order-review column">
            <h1>Detalles de Compra</h1>
            <table>
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Valor</th>
                </tr>
              </thead>
              <tbody>
                  {
                    productsInfo ?
                    <>
                      {productsInfo.map((product, index) => (
                        <>
                          <tr>
                            <td>{product.name} x {userData.cart[index].amount}</td>
                            <td>COP${product.price / 1000}.000</td>
                          </tr>
                        </>
                      ))}
                    </>
                    :
                    <>
                    </>
                  }
              </tbody>
              <tfoot>
                <tr>
                  <th>Subtotal</th>
                  <td>COP${Math.round(billingData.taxReturnBase / 1000)}.{billingData.taxReturnBase % 1000}</td>
                </tr>
                <tr>
                  <th>IVA (19%)</th>
                  <td>COP${Math.trunc(billingData.tax / 1000)}.{billingData.tax % 1000}</td>
                </tr>
                <tr>
                  <th>Envío</th>
                  <td>Sin definir</td>
                </tr>
                <tr>
                  <th>Total</th>
                  <td>COP${billingData.amount / 1000}.000 (incluye IVA 19%)</td>
                </tr>
              </tfoot>
            </table>
            <InputButton name="Submit" value="Pagar"/>
          </div>
        </form>
      </div>
    </>
    :
    <span>Despegala</span>
  )
}

export default ShoppingCartPage