//libs
import React from "react"
import {Link} from "react-router-dom"
import PropTypes from 'prop-types'
import cn from 'classnames'
//comps
import withCartConnect from "../../hoc/withCartConnect"
//utils
import {regExpPrice} from "../../config/utils"
//styles
import './userNav.css'
import './../svgfont/svgfont.css'

UserNav.propTypes = {
    class: PropTypes.string,
    length: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired
};

function UserNav(props) {
    let className = cn({
        userNav: true,
        userNav_disabled: props.length === 0
    });
    let wrapperClassname = cn({
        userNav__wrapper: true,
        [props.class]: props.class
    });
    const clickHandler = (e) => {
        if (props.length === 0) {
            e.preventDefault()
        }
    };
    return (
        <div className={wrapperClassname}>
            <Link onClick={clickHandler} to={'/cart'} className={className}>
                <span className="userNav__userIco icon-svg__userico"/>
                <div className="userNav__cart">
                    <span className="userNav__cartIco icon-svg__cartico"/>

                    <span className="userNav__itemCounter">{props.length}</span>
                    <span className="userNav__separator"> / </span>
                    <span className="userNav__price">{regExpPrice(props.price)}р</span>
                </div>
            </Link>

            {/*<div className="userNav__popup">*/}
            {/*    <div className="userNav__header">*/}
            {/*        <span>{props.length}</span><span></span><span></span><span></span>*/}
            {/*    </div>*/}
            {/*    <div className="userNav__content">*/}

            {/*    </div>*/}
            {/*    <div className="userNav__buttons">*/}

            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}

export default withCartConnect(UserNav)
