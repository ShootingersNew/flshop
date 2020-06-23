//libs
import React from "react"
import PropTypes from 'prop-types'
//styles
import './checkbox.css'

Checkbox.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
    checked: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    ref: PropTypes.func,
    controlled: PropTypes.bool

};
export default function Checkbox(props) {
    return (
        <label className={'checkbox ' + props.className}>
            {props.controlled ? <input
                    className={'checkbox__true'}
                    type={'checkbox'}
                    data-inputtype={props.type}
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange ? props.onChange : undefined}
                    checked={props.checked ? props.checked : null}
                    ref={props.register ? props.register : null}
                />
                :
                <input
                    className={'checkbox__true'}
                    type={'checkbox'}
                    data-inputtype={props.type}
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange ? props.onChange : undefined}
                    defaultChecked={props.defaultChecked ? props.defaultChecked : null}
                    ref={props.register ? props.register : null}
                />}
            <span className="checkbox__box"/>

        </label>
    )
}