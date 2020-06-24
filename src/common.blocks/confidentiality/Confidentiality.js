//libs
import React from "react"
import {Link} from "react-router-dom"
import cn from 'classnames'
//comps
import Checkbox from "../checkbox/Checkbox"
//styles
import './confidentiality.css'
import './../link/link.css'

export default function Confidentiality(props) {
    let classname = cn({
        'confidentiality': true,
        [props.className]: props.className
    });
    return (
        <div className={classname}>
            <Checkbox
                name={'confidentiality'}
                className={'confidentiality__checkbox'}
                register={props.register ? props.register : null}
                defaultChecked={props.defaultChecked}
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