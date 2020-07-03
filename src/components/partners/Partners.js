import React from "react";
//styles
import './../svgfont/svgfont.css'
import './partners.css'

export default function Partners() {
    return (
        <div className="partners">
            <div className="partners__container">
                <span className="partners__logo icon-svg__compaqlogo"/>
                <span className="partners__logo partners__verizon icon-svg__verizonlogo"/>
                <span className="partners__logo partners__citibank icon-svg__citibanklogo"/>
                <span className="partners__logo partners__worldplay icon-svg__worldplaylogo"/>
                <span className="partners__logo partners__sandisk icon-svg__sandisklogo"/>
            </div>
        </div>
    )
}