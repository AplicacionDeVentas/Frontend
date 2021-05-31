import React, {useState, useEffect} from 'react';
import {Link, useHistory} from "react-router-dom";
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Layout, Menu } from 'antd';
import IconButton from '../../../Utils/IconButton';
import MenuBars from "./MenuBars/MenuBars";
import MenuButtons from "./MenuButtons/MenuButtons";

import "./PageHeader.scss";


const PageHeader = () => {

  const [change, setChange] = useState(false);
  const [iconSearch, setIconSearch] = useState(true)
  const [value, setValue] = useState("")
  const history = useHistory()
  
  const handleSubmit = (e) => {
    history.push({
      search: `?search=${e}`
    })
    if(e != ""){
      return setIconSearch(false)
    }
    return setIconSearch(true)
  }
  
  useEffect(() => {
    handleSubmit(value)
  }, [value])
  
  const menuResponsive = () => {
    setChange(!change);
  }

  
  
  return (

    <header className="header__home">      

          <nav className="navbar container">

            <div className="navbar__logo">
              <Link to={"/"}><span>Miss Maceticas</span></Link>
            </div>

            <div className="navbar__search">                         
              <input id="search" className="search" type="search" placeholder="Buscar producto" onChange={e => {setValue(e.target.value)}} value={value} ></input>
              <IconButton icon={iconSearch ? faSearch : faTimes} onClick={() => (setValue(""), document.getElementById("search").focus())}/>
            </div>
            
            <MenuButtons />            

            <label>
              <MenuBars change={change} menuResponsive={menuResponsive} />
            </label>

            {change ? <Sider menuResponsive={menuResponsive} /> : null}        

          </nav>     

    </header>
        

  )
}

function Sider(props){
  const {menuResponsive} = props;

  return (
    <Layout.Sider className="navbar-responsive-home" width="100%" >
      <Menu className="container" mode="inline" style={{height: "100%"}}>
        <Menu.Item key="1" onClick={menuResponsive}>Inicio</Menu.Item>
        <Menu.SubMenu onClick={menuResponsive} key="sub1" title="Categoria">
          <Menu.Item key="sub1.1">option1</Menu.Item>
          <Menu.Item key="sub1.2">option2</Menu.Item>
          <Menu.Item key="sub1.3">option3</Menu.Item>
          <Menu.Item key="sub1.4">option4</Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key="2" onClick={menuResponsive}>PQRS</Menu.Item>
        <Menu.Item key="3" onClick={menuResponsive}><Link to={"/admin"}>Admin</Link></Menu.Item>
      </Menu>
    </Layout.Sider>
  )
}

export default PageHeader;
