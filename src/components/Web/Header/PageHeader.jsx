import React, {useState} from 'react';
import {Link} from "react-router-dom";
import { } from 'antd';
import { faShoppingBag, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import IconButton from '../../../Utils/IconButton'

import "./PageHeader.scss";


const PageHeader = () => {

  return (

    <header className="header__home">      

          <div className="navbar container">

            <div className="navbar__logo">
              <Link to={"/"}><span>Miss Maceticas</span></Link>
            </div>

            <div className="navbar__search">
              <span>                           
                <input className="search" type="search" ></input>
                <IconButton icon={faSearch} size="lg"/>   
              </span>
            </div>
            
            <div className="navbar__buttons">              
              <div>
                <a>Inicio</a>
                <a>Categorias</a>
                <a>PQRS</a>
              </div>

              <div className="navbar__buttons__icons">
                <Link to={"/login"}><IconButton icon={faUser} size="lg" /></Link>
                <IconButton icon={faShoppingBag} size="lg" />
              </div>
            </div>

          </div>     

    </header>
        

  )
}

export default PageHeader;
