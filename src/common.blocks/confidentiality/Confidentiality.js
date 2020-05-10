import React from "react";
import {Link} from "react-router-dom";
import Checkbox from "../checkbox/Checkbox";
import './confidentiality.css'
import './../link/link.css'

export default function Confidentiality(props) {
    return (
        <div className={'confidentiality ' + props.className}>
            <Checkbox
                className={'confidentiality__checkbox'}
                checked={props.checked}
                onChange={props.onChange}
            />
            <div className="confidentiality__text">
                Согласен(на) с условиями&ensp;
                <Link to={'/'} className={'link'}>
                    «Политики конфиденциальности
                    и обработки персональных данных»
                </Link>
            </div>
        </div>
    )
};