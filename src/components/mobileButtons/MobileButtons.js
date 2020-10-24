import React from "react"
import PropTypes from 'prop-types'
import './style.css'
import Button from "../button/Button"
import {Link} from "react-router-dom";
import {useRouteMatch} from "react-router-dom";

const MobileButtons = ({top, bot}) => {
    const buttonType = {
        name: PropTypes.string.isRequired,
        alt: PropTypes.string,
        fun: PropTypes.func,
        type: PropTypes.oneOf(['add', 'remove', 'checkout', 'oneClick']),
        isActive: PropTypes.bool
    };
    MobileButtons.propTypes = {
        top: PropTypes.arrayOf(PropTypes.shape(buttonType)),
        bot: PropTypes.arrayOf(PropTypes.shape(buttonType)).isRequired
    };
    let match = useRouteMatch();

    const mapButtons = (arr, side) => (
        arr.map((button, idx) => {
            if (button.type === 'checkout') {
                return (

                    <Link
                        to={`${match.path}/mobilecheckout`}
                        key={idx}
                        mod={button.btnMod}
                        className={`mobileButtons__button mobileButtons__button_${side} mobileButtons__button_${button.type}`}
                    >
               <span className="mobileButtons__text">
                    {
                        !!button.isActive || !button.alt ? button.name : button.alt
                    }
               </span>
                    </Link>
                )
            } else {
                return (
                    <Button
                        key={idx}
                        onClick={button.fun}
                        mod={button.btnMod}
                        disabled={button.isActive ? !button.isActive : false}
                        className={`mobileButtons__button mobileButtons__button_${side} mobileButtons__button_${button.type}`}
                    >
               <span className="mobileButtons__text">
                    {
                        !!button.isActive || !button.alt ? button.name : button.alt
                    }
               </span>
                    </Button>
                )
            }
        })
    );
    return (
        //mobile ui buttons
        <>
            {/*for top (optional) */}
            {
                top &&
                <div className="mobileButtons__wrapper mobileButtons__wrapper_top">
                    {
                        mapButtons(top, 'top')
                    }
                </div>}
            {/*for bottom*/}
            <div className="mobileButtons__wrapper mobileButtons__wrapper_bot">
                {
                    mapButtons(bot, 'bot')
                }
            </div>
        </>
    )
};
export default MobileButtons
