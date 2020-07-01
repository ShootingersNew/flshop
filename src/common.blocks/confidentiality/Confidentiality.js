//libs
import React from "react"
import {Link} from "react-router-dom"
import cn from 'classnames'
import PropTypes from 'prop-types'
//comps
import Checkbox from "../checkbox/Checkbox"
//styles
import './confidentiality.css'

Confidentiality.propTypes = {
    className: PropTypes.string,
    register: PropTypes.func,
    defaultChecked: PropTypes.bool,
    customText: PropTypes.element

};

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
                <Link to={'/'} className={'link confidentiality__link'}>
                    {
                        props.customText ?
                            props.customText
                            :
                            '«Политики конфиденциальности и обработки персональных данных»'
                    }
                </Link>
            </div>
        </div>
    )
};