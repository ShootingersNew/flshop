//libs
import React from "react"
import PropTypes from 'prop-types';
import classNames from 'classnames'
//styles
import './input.css'

Input.propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    isValid: PropTypes.bool,
    type: PropTypes.string
};
export default function Input(props) {
    let inputClass = classNames({
        'input fonts__proximaNovaRegular': true,
        'input_isValid_true': props.isValid,
        [`${props.className}`]: props.className
    });
    let input;
    if (props.type && props.type === 'textarea') {
        input = <textarea

            name={props.name}
            onChange={props.onChange ? props.onChange : null}
            className={inputClass + ' input_textarea'}
            placeholder={props.placeholder}
            ref={props.register ? props.register : null}
            defaultValue={props.defaultValue ? props.defaultValue : null}
        />
    } else {
        input = <input

            name={props.name}
            onChange={props.onChange ? props.onChange : null}
            type="text"
            className={inputClass}
            placeholder={props.placeholder}
            ref={props.register ? props.register : null}
            defaultValue={props.defaultValue ? props.defaultValue : null}
        />
    }
    return input
}
