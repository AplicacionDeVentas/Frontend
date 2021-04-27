import React from "react";
import {Carousel} from "antd";

import "./ViewItem.scss";

export default function ViewItem(props){
    const {item} = props;
    console.log(item);


    return(
        <>
            <div className="imagenes">
                <Carousel>
                    <img src={item.img} />
                    <img src={item.img} />
                    <img src={item.img} />
                    <img src={item.img} />
                </Carousel>
                
            </div>
        </>
    )
}