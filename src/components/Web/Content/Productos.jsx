import React,{useState} from "react";
import {Card,Row, Col} from "antd";
import ModalAntd from "../Modal/Modal";
import ViewItem from "./ViewItem/ViewItem";

import "./Productos.scss";

const productos = [
    {
        _id: 1,
        img: "https://static.vix.com/es/sites/default/files/styles/1x1/public/imj/hogartotal/m/macetas%20eleccion.jpg",
        name: "maceta con dibujo de colibri",
        price: 20
    },
    {
        _id: 2,
        img: "https://static.vix.com/es/sites/default/files/styles/1x1/public/imj/hogartotal/m/macetas%20eleccion.jpg",
        name: "maceta con dibujo de cangrejo",
        price: 20
    },
    {
        _id: 3,
        img: "https://static.vix.com/es/sites/default/files/styles/1x1/public/imj/hogartotal/m/macetas%20eleccion.jpg",
        name: "maceta con dibujo de lobo",
        price: 20
    },
    {
        _id: 4,
        img: "https://static.vix.com/es/sites/default/files/styles/1x1/public/imj/hogartotal/m/macetas%20eleccion.jpg",
        name: "maceta con dibujo de luffy",
        price: 20
    },
    {
        _id: 5,
        img: "https://static.vix.com/es/sites/default/files/styles/1x1/public/imj/hogartotal/m/macetas%20eleccion.jpg",
        name: "maceta con dibujo de goku",
        price: 20
    },
    {
        _id: 6,
        img: "https://static.vix.com/es/sites/default/files/styles/1x1/public/imj/hogartotal/m/macetas%20eleccion.jpg",
        name: "maceta con dibujo de react",
        price: 20
    }
]
export default function Productos() {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalContent, setModalContent] = useState(null);

    const viewModal = item => {
        setModalVisible(true);
        setModalTitle(item.name);
        setModalContent(<ViewItem item={item} />);
    }

    return(
        <Row className="products">
            <Col lg={24} className="products__title">
                <h1>Últimos productos</h1>
            </Col>
            <Col lg={3} />
            <Col lg={18}>
                <Row className="products__items" >
                    {productos.map(item => {
                        return (
                            <Col  sm={10} md={9} lg={8} xl={6} xxl={6} key={item._id}>
                                <ItemCard items={item} viewModal={viewModal} />
                            </Col>
                        )
                    })}
                </Row>
            </Col>
            <Col lg={3} />
            <ModalAntd title={modalTitle} modalVisible={modalVisible} setModalVisible={setModalVisible} width={"80%"} >
                {modalContent}
            </ModalAntd>        
        </Row>
    )
}

function ItemCard(props) {
    const {items, viewModal} = props;
    return(
        <Card 
            hoverable 
            cover={<img alt={`imagen de ${items.name}`} src={items.img} />}
            style={{ width: "auto" }}
            onClick={() => viewModal(items)}
        >
            <Card.Meta title={items.name} description={`COP $${items.price}`} />
        </Card>
    )
}