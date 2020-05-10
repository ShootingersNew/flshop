import React from "react";
import './subscribe.css'

export default function Subscribe() {
    return (
        <div className="subscribe">
            <div className="subscribe__container">
                <h3 className="subscribe__header fonts__proximaNovaBold">Еженедельные скидки и акции</h3>
                <form className={'subscribe__form'}>
                    <input className={'subscribe__input'} type="text" placeholder={'E-mail'}/>
                    <button className={'subscribe__submit'}>Подписаться</button>
                </form>
            </div>
        </div>
    )
}