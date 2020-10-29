//libs
import React from "react"
import InputMask from 'react-input-mask'
import PropTypes from 'prop-types'
import cn from 'classnames'
//comps
import Form from "../form/Form"
import Modal from "../modal/Modal"
import Input from "../input/Input"
import Confidentiality from "../confidentiality/Confidentiality"
import InfoModalView from "../modal/views/InfoModalView/InfoModalView"
import Button from "../button/Button"
import Container from "../container/Container";
// styles || config
import './checkout.css'
import {mask} from './../../config/config'
import {useIsMobile} from "../../config/utils";

Checkout.propTypes = {
    submitCheckout: PropTypes.func.isRequired,
    popupContent: PropTypes.object.isRequired,
    className: PropTypes.string,
    map: PropTypes.element
};

export default function Checkout(props) {
    const classNames = cn({
        checkout: true,
        [`${props.className}`]: props.className
    });
    const isMobile = useIsMobile();

    return (
        <div className={classNames}>
            <h5 className="checkout__header">
                Оформление заказа
            </h5>
            <Form className={'checkout__form'}
                  submitHandler={props.submitCheckout}
                  render={
                      ({register, formState, control, errors, getValues}, isValidInput, Controller) => (
                          <React.Fragment>
                              <Container className={'container_mobile'}>
                                  <label className={'checkout__label'}>
                                      <span className="checkout__name"> Имя*</span>
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
                                      <span className="checkout__name">Телефон*</span>
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
                              </Container>
                              {
                                  props.map && props.map(register, isValidInput)
                              }
                              <Container className={'container container_mobile'}>
                                  <label className={'checkout__label checkout__label_comment'}>
                                      <span className="checkout__name"> Комментарий</span>

                                      <Input
                                          name={'comment'}
                                          className={'checkout__input'}
                                          placeholder={isMobile ? 'Комментарий к заказу' : 'По желанию'}
                                          register={register}
                                          type={isMobile ? 'textarea' : null}

                                      />
                                  </label>
                              </Container>
                              {props.children}
                              <Container className="container container_mobile">
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
                              </Container>
                          </React.Fragment>
                      )}
            />
        </div>
    )
}
