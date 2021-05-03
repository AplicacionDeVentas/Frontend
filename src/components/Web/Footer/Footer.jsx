import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faWhatsapp, faInstagram, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import IconButton from '../../../Utils/IconButton'
import InputField from '../../../Utils/InputField/InputField'
import InputButton from '../../../Utils/InputButton/InputButton'

import "./Footer.scss";

export default function PageFooter() {
  return (
    <footer>
      <div className="footer-main">
        <div className="container">
          <div className="col">
            <aside className="widget contact-info">
              <h3 className="widget-title">Miss Maceticas</h3>
              <ul className="widget-list">
                <li><strong>Direccion: </strong><span>Transversal 80 #4-12</span></li>
                <li><strong>Telefono: </strong><span><a href="tel:+573187922804" rel="noreferrer">+57 318 792 2804</a></span></li>
                <li><strong>Email: </strong><span><a href="mailto:missmaceticas@gmail.com" rel="noreferrer">missmaceticas@gmail.com</a></span></li>
                <li><strong>Horario: </strong><span>L-V 09.00am - 04.00pm</span></li>
              </ul>
              <FontAwesomeIcon icon={faWhatsapp} size="lg"/>
              <span> Whatsapp: </span>
              <a href="https://wa.me/573187922804" target="_blank" rel="noreferrer">+57 317 792 2804</a>
            </aside>
            <aside className="widget follow-us">
              <h3 className="widget-title">Siguenos</h3>
              <div className="share-link">
                <IconButton icon={faFacebook} size="lg"/>
                <IconButton icon={faInstagram} size="lg"/>
              </div>
            </aside>
          </div>
          <div className="col">
            <aside className="widget legal-info">
              <h3 className="widget-title">Informacion Legal</h3>
              <ul className="widget-list">
                <li><a href="#">Condiciones Generales</a></li>
                <li><a href="#">Envios y Devoluciones</a></li>
                <li><a href="#">Politica de Privacidad</a></li>
                <li><a href="#">Politica de Cookies</a></li>
                <li><a href="#">Propiedad Intelectual e Industrial</a></li>
              </ul>
            </aside>
            <aside className="widget developer-info">
              <h3 className="widget-title">Desarrolladores</h3>
              <div className="developer">
                <p>Camilo Vargas</p>
                <div className="share-link">
                  <a href="https://github.com/camilovargas123" target="_blank" rel="noreferrer" >
                    <IconButton icon={faGithub} size="lg"/>
                  </a>                  
                </div>
              </div>
              <div className="developer">
                <p>Alex Chirino</p>
                <div className="share-link">
                  <a href="https://github.com/apchirinoc" target="_blank" rel="noreferrer" >
                    <IconButton icon={faGithub} size="lg" />
                  </a>
                  <a href="https://twitter.com/apchirinoc" target="_blank" rel="noreferrer" >
                    <IconButton icon={faTwitter} size="lg"/>
                  </a>
                </div>
              </div>
            </aside>
          </div>
          <div className="col">
            <aside className="widget newsletter">
              <h3 className="widget-title">Suscribete a nuestro Newsletter</h3>
              <p>Suscribete a nuestro newsletter para mantenerte informado sobre nuestras <strong>ofertas,</strong><strong>nuevos productos</strong> y muchos tips sobre los cuidados de tus maceticas!</p>
              <form action="" className="newsletter-form">
                <InputField type="text" name="name" placeholder="Nombre"/>
                <InputField type="email" name="email" placeholder="Correo"/>
                <InputButton value="Suscribirme"/>
              </form>
            </aside>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <span>© copyright 2021. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  )
}
