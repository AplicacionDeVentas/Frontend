import React from "react";
import {Modal} from "antd";

import "./Modal.scss";

export default function ModalAntd(props) {
    const {children, title, modalVisible, setModalVisible, ...other} = props;

    return (
        <Modal title={title} centered visible={modalVisible} onCancel={() => setModalVisible(false)} footer={false} {...other}>
            {children}
        </Modal>
    )
}