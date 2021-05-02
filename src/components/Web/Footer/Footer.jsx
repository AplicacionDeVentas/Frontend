import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faWhatsapp, faInstagram, faGithub, faTwitter,  } from '@fortawesome/free-brands-svg-icons';
import IconButton from '../../../Utils/IconButton'

import "./Footer.scss";

export default function PageFooter() {
  return (
    <footer>
      <div className="footer-main">
        <div className="footer-main__container">
          <div className="col">
            <aside className="widget contact-info">
              <h3 className="widget-title">Miss Maceticas</h3>
              <ul className="widget-list">
                <li><strong>Direccion: </strong><span>Transversal 80 #4-12</span></li>
                <li><strong>Telefono: </strong><span><a href="tel:+573187922804">+57 318 792 2804</a></span></li>
                <li><strong>Email: </strong><span><a href="mailto:missmaceticas@gmail.com">missmaceticas@gmail.com</a></span></li>
                <li><strong>Horario: </strong><span>L-V 09.00am - 04.00pm</span></li>
              </ul>
              <FontAwesomeIcon icon={faWhatsapp} size="lg"/>
              <span> Whatsapp: </span>
              <a href="https://wa.me/573187922804" target="_blank">+57 317 792 2804</a>
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
                  <IconButton icon={faGithub} size="lg" href="#"/>
                </div>
              </div>
              <div className="developer">
                <p>Alex Chirino</p>
                <div className="share-link">
                  <IconButton icon={faGithub} size="lg" href="https://github.com/apchirinoc"/>
                  <IconButton icon={faTwitter} size="lg" href="https://twitter.com/apchirinoc"/>
                </div>
              </div>
            </aside>
          </div>
          <div className="col">
            
          </div>
          <div className="col"></div>
        </div>
      </div>
      <div className="footer-bottom">
        
      </div>
    </footer>
  )
}
