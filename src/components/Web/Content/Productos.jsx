import React,{useState} from "react";
import {Card,Row, Col} from "antd";

import "./Productos.scss";

const productos = [
    {
        img: "https://static.vix.com/es/sites/default/files/styles/1x1/public/imj/hogartotal/m/macetas%20eleccion.jpg",
        name: "maceta con dibujo de colibri",
        price: 20
    },
    {
        img: "https://static.vix.com/es/sites/default/files/styles/1x1/public/imj/hogartotal/m/macetas%20eleccion.jpg",
        name: "maceta con dibujo de cangrejo",
        price: 20
    },
    {
        img: "https://static.vix.com/es/sites/default/files/styles/1x1/public/imj/hogartotal/m/macetas%20eleccion.jpg",
        name: "maceta con dibujo de lobo",
        price: 20
    },
    {
        img: "https://static.vix.com/es/sites/default/files/styles/1x1/public/imj/hogartotal/m/macetas%20eleccion.jpg",
        name: "maceta con dibujo de luffy",
        price: 20
    },
    {
        img: "https://static.vix.com/es/sites/default/files/styles/1x1/public/imj/hogartotal/m/macetas%20eleccion.jpg",
        name: "maceta con dibujo de goku",
        price: 20
    },
    {
        img: "https://static.vix.com/es/sites/default/files/styles/1x1/public/imj/hogartotal/m/macetas%20eleccion.jpg",
        name: "maceta con dibujo de react",
        price: 20
    }
]
export default function Productos() {

    return(
        <Row className="products">
            <Col lg={24} className="products__title">
                <h1>Últimos productos</h1>
            </Col>
            <Col lg={3} />
            <Col lg={18}>
                <Row className="products__items">
                    {productos.map(item => {
                        return (
                            <Col md={6} key={item.name}>
                                <ItemCard img={item.img} name={item.name} price={item.price} />
                            </Col>
                        )
                    })}
                </Row>
            </Col>
            <Col lg={3} />            
        </Row>
    )
}

function ItemCard(props) {
    const {img, name, price} = props;
    return(
        <Card 
            hoverable 
            cover={<img alt={`imagen de ${name}`} src={img} />}
            style={{ width: 240 }}
        >
            <Card.Meta title={name} description={`COP $${price}`} />
        </Card>
    )
}