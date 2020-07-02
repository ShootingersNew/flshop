//libs
import React from "react";
import {Link} from "react-router-dom";
import cn from "classnames";
import PropTypes from 'prop-types';
//styles
import './verticalBanner.css'

VerticalBanner.propTypes = {
    banner: PropTypes.object.isRequired,
    className: PropTypes.string,
    type: PropTypes.string
};
export default function VerticalBanner(props) {
    let className = cn({
        'verticalBanner fonts__proximaNovaBlack': true,
        [props.className]: props.className,
        [`verticalBanner_${props.type}`]: props.type,
    });
    return (
        <Link to={props.banner.url} style={{backgroundImage: 'url(' + props.banner.bg + ')'}}
              className={className}/>
    )
}