//libs
import React from "react";
import PropTypes from 'prop-types'
//comps
import Bouquet from "../bouquet/Bouquet"
//styles
import './additionalItems.css'

AdditionalItems.propTypes = {
    addItems: PropTypes.array.isRequired
};
export default function AdditionalItems(props) {
    return (
        <div className="additionalItems">
            <div className="additionalItems__header">C этим товаром также приобретают</div>
            <div className="additionalItems__inner">
                {props.addItems && props.addItems.map((item, idx) => {
                    return (<Bouquet item={item} key={idx}/>)
                })
                }
            </div>
        </div>
    )
}