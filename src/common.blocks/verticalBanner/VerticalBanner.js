import React from "react";
import {Link} from "react-router-dom";
import './verticalBanner.css'
import '../fonts/__proximaNovaBlack/fonts__proximaNovaBlack.css'

export default function VerticalBanner(props) {
    return (
        <Link to={props.banner.url} style={{backgroundImage: 'url(' + props.banner.bg + ')'}}
              className={'verticalBanner fonts__proximaNovaBlack ' + props.className}>
            <h2 className={'verticalBanner__header'}>
                {props.banner.header}
            </h2>
        </Link>
    )
}