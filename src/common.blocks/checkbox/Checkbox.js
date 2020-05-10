import React from "react";
import './checkbox.css';

export default function Checkbox(props) {
    return (
        <label className={'checkbox ' + props.className + ' checkbox_checked_' + props.checked}>
        <span className="checkbox__box">
             <input
                 className={'checkbox__true'}
                 checked={props.checked}
                 onChange={() => props.onChange(!props.checked)}
                 type="checkbox"
             />
        </span>
        </label>
    )
}