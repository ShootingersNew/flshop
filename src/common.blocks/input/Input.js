import React from "react";
import './input.css'
import './../fonts/__proximaNovaRegular/fonts__proximaNovaRegular.css'

export default function Input(props) {
    return (
        <input
            value={props.value}
            type="text"
            className={'input ' + props.className + ' input_isValid_' + props.isValid + ' fonts__proximaNovaRegular input_required_' + props.required}
            onChange={(e) => {
                props.onChange(props.name, e)
            }}
            placeholder={props.placeholder}/>
    )
}