import React from "react";
import "./MenuBars.scss";

export default function MenuBars(props) {

    const {change, menuResponsive} = props;

    return (
            <div className={`menu-bars ${change ? "change" : ""}`} onClick={menuResponsive}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>

    )
}