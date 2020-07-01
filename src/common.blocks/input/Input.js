//libs
import React from "react"
import PropTypes from 'prop-types';
import classNames from 'classnames'
//styles
import './input.css'

Input.propTypes = {
    classname: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    isValid: PropTypes.bool
};
export default function Input(props) {
    let inputClass = classNames({
        'input fonts__proximaNovaRegular': true,
        'input_isValid_true': props.isValid,
    });
    return (
        <input
            name={props.name}
            type="text"
            className={inputClass + ' ' + props.className}
            placeholder={props.placeholder}
            ref={props.register ? props.register : null}
            defaultValue={props.defaultValue ? props.defaultValue : null}
        />
    )
}