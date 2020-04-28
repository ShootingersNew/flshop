import React from "react";
import './additionalItems.css'
import Bouquet from "../bouquet/Bouquet";

export default function AdditionalItems(props) {
    return (
        <div className="additionalItems">
            <div className="additionalItems__header">C этим товаром также приобретают</div>
            <div className="additionalItems__inner">
                {props.addItems &&
                props.addItems.map((item) => {
                    return (<Bouquet item={item}/>)
                })
                }
            </div>
        </div>
    )
}