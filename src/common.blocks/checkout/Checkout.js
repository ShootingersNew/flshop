import React, {useState, useEffect} from "react";
import './checkout.css'
import Modal from "../modal/Modal";
import InputMask from 'react-input-mask';
import Input from "../input/Input";
import Confidentiality from "../confidentiality/Confidentiality";
import InfoModalView from "../modal/infoModalView/InfoModalView";


export default function Checkout(props) {

    const [attrs, setAttrs] = useState({
        name: {val: '', isValid: false},
        phone: {val: '', isValid: false},
        comment: {val: '', isValid: true}
    });
    const [isFormValid, setIsFormValid] = useState(false);
    const [isAgreementChecked, setIsAgreementChecked] = useState(true);
    const mask = "+7 \999 999 99 99";

    function changeAttrs(name, event) {
        //get value of input ant input's name
        let isValid = false;
        const curValue = event.target.value;

        switch (name) {
            //validate depending on input's name
            case 'phone':
                const numbersInMask = mask.length - mask.replace(/\d/gm, '').length;
                const numbersInVal = curValue.length - curValue.replace(/\d/gm, '').length;
                isValid = numbersInMask === numbersInVal;
                //set state
                return setAttrs({...attrs, phone: {...attrs.phone, isValid: isValid, val: event.target.value}});
            case 'name':
                isValid = event.target.value.length > 1;
                setAttrs({...attrs, name: {...attrs.name, isValid: isValid, val: event.target.value}});
                break;
            case 'comment':
                return setAttrs({...attrs, comment: {...attrs.comment, isValid: true, val: event.target.value}});

            default:
                return
        }
    }

    function onSubmit(e) {
        e.preventDefault();
        if (isFormValid) {
            props.submitCheckout(attrs)
        }
    }

    useEffect(() => {
        //check that all fields in state 'attrs' have value 'isValid:true'
        let valid = true;
        for (let attrsKey in attrs) {
            if (!attrs[attrsKey].isValid) {
                valid = false;
                break;
            }
        }
        setIsFormValid(valid && isAgreementChecked)
    }, [attrs, isAgreementChecked]);

    return (
        <div className="checkout">
            <h5 className="checkout__header">
                Оформление заказа
            </h5>
            <form onSubmit={(e) => {
                onSubmit(e)
            }} className="checkout__form">
                <label className={'checkout__label'}>
                    Имя*
                    <Input
                        name={'name'}
                        value={attrs.name.val}
                        isValid={attrs.name.isValid}
                        required={true}
                        className={'checkout__input'}
                        onChange={changeAttrs}
                        placeholder={'Введите свое имя'}
                        type="text"
                    />
                </label>

                <label className={'checkout__label'}>
                    Телефон*
                    <InputMask
                        placeholder={'Введите номер телефона'}
                        className={'input checkout__input input_required_true input_isValid_' + attrs.phone.isValid}
                        value={attrs.phone.val}
                        mask={mask} maskChar="_"
                        onChange={(e) => {
                            changeAttrs('phone', e)
                        }}
                    />
                </label>

                <label className={'checkout__label'}>
                    Комментарий
                    <Input
                        name={'comment'}
                        value={attrs.comment.val}
                        isValid={attrs.name.isValid}
                        required={false}
                        className={'checkout__input'}
                        onChange={changeAttrs}
                        placeholder={'По желанию'}
                        type="text"
                    />
                </label>


                <div className="checkout__footer">
                    {/*Modal includes submit button*/}
                    <Modal
                        btnClassName={'checkout__button'}
                        btnDisabled={!isFormValid}
                        header={'Сообщение'}
                        content={() => (<InfoModalView info={props.popupContent}/>)}
                    />

                    <Confidentiality
                        className={'checkout__confidentiality'}
                        checked={isAgreementChecked}
                        onChange={setIsAgreementChecked}
                    />
                </div>

            </form>
        </div>
    )
}