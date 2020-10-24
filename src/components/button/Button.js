//libs
import React from "react"
import {Link} from "react-router-dom"
import PropTypes from 'prop-types'
import cn from 'classnames'
//styles
import './button.css'

const Button = React.forwardRef((props, ref) => {
        function clickHandler(e) {
            if (props.ePrevent) {
                e.preventDefault()
            }
            if (props.onClick) {
                props.onClick(e)
            }
        }

        const btnClassname = cn({
            'button': true,
            [`button_${props.mod}`]: props.mod,
            [props.className]: props.className
        });
    let button;
    switch (props.type) {
        case 'link':
            button = <Link to={props.link} className={btnClassname}> {props.children} </Link>;
            break;
        case 'input' :
            button = <input
                type={'submit'}
                className={btnClassname}
                disabled={props.disabled ? props.disabled : null}
                value={props.children}
            />;
            break;
        default:
            button =
                <button
                    className={btnClassname}
                    onClick={clickHandler}
                    disabled={props.disabled ? props.disabled : false}
                >
                    {props.children}
                </button>;
    }

        return (
            <React.Fragment>
                {button}
            </React.Fragment>
        )

    }
);
Button.propTypes = {
    disabled: PropTypes.bool,
    mod: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string,
    link: PropTypes.string,
    ePrevent: PropTypes.bool
};
export default Button
