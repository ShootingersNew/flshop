//libs
import React from "react"
import InputMask from 'react-input-mask'
import PropTypes from 'prop-types'
//comps
import Form from "../form/Form"
import Modal from "../modal/Modal"
import Input from "../input/Input"
import Confidentiality from "../confidentiality/Confidentiality"
import InfoModalView from "../modal/views/InfoModalView/InfoModalView"
import Button from "../button/Button"
// styles || config
import './checkout.css'
import {mask} from './../../config/config'

Checkout.propTypes = {
    submitCheckout: PropTypes.func.isRequired,
    popupContent: PropTypes.object.isRequired
};
export default function Checkout(props) {
    return (
        <div className="checkout">
            <h5 className="checkout__header">
                Оформление заказа
            </h5>
            <Form className={'checkout__form'}
                  submitHandler={props.submitCheckout}
                  render={
                      ({register, formState, control, errors, getValues}, isValidInput, Controller) => (
                          <React.Fragment>
                              <label className={'checkout__label'}>
                                  Имя*
                                  <Input
                                      name={'name'}
                                      className={'checkout__input'}
                                      placeholder={'Введите свое имя'}
                                      type="text"
                                      isValid={isValidInput('name')}
                                      register={register({minLength: 2})}
                                  />

                              </label>
                              <label className={'checkout__label'}>
                                  Телефон*
                                  <Controller
                                      as={InputMask}
                                      control={control}
                                      name={'phone'}
                                      placeholder={'Введите номер телефона'}
                                      className={'input checkout__input input_validation_true input_isValid_' + isValidInput('phone')}
                                      mask={mask} maskChar="_"
                                      defaultValue={''}
                                      rules={{
                                          validate: (value) => {
                                              const numbersInMask = mask.length - mask.replace(/\d/gm, '').length;
                                              const numbersInVal = value.length - value.replace(/\d/gm, '').length;
                                              return numbersInMask === numbersInVal;
                                          }
                                      }}
                                  />
                              </label>
                              <label className={'checkout__label'}>
                                  Комментарий
                                  <Input
                                      name={'comment'}
                                      className={'checkout__input'}
                                      placeholder={'По желанию'}
                                      type="text"
                                      register={register}
                                  />
                              </label>
                              <div className="checkout__footer">
                                  {/*Modal includes submit button*/}
                                  <Modal
                                      trigger={
                                          <Button
                                              className={'checkout__button'}
                                              disabled={!formState.isValid}>
                                              Оформить
                                          </Button>
                                      }
                                      header={'Сообщение'}
                                      content={
                                          <InfoModalView info={props.popupContent}/>
                                      }
                                  />

                                  <Confidentiality
                                      className={'checkout__confidentiality'}
                                      register={register({required: true})}
                                      defaultChecked={true}
                                  />
                              </div>
                          </React.Fragment>
                      )}
            />
        </div>
    )
}