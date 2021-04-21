import React from 'react';
import { Layout, Row, Col } from 'antd';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';

import "./Footer.scss";

const { Footer } = Layout

export default function PageFooter() {
  return (
    <Footer className="footer">
      <Row>
        <Col span={3}></Col>
        <Col className="footer__container" span={18}>
          <div className="footer__legal">
            <Link>Términos y Condiciones</Link>
            <span>•</span>
            <Link>Política de Privacidad</Link>
            <span>•</span>
            <Link>Protección al Consumidor</Link>
          </div>
          <div className="footer__social-media">
            <a href="https://www.facebook.com/missmaceticas" target="_blank">
              <FontAwesomeIcon icon={faFacebook} size="lg"/>
            </a>
            <a href="https://wa.me/573187922802" target="_blank">
              <FontAwesomeIcon icon={faWhatsapp} size="lg"/>
            </a>
            <a href="https://www.instagram.com/missmaceticas" target="_blank">
              <FontAwesomeIcon icon={faInstagram} size="lg"/>
            </a>
          </div>
        </Col>
        <Col span={3}></Col>
      </Row>
    </Footer>
  )
}
