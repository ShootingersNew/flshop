//libs
import React from "react"
import InputMask from "react-input-mask"
//comps
import Form from "../../../form/Form"
import Input from "../../../input/Input"
import Button from "../../../button/Button"
import Confidentiality from "../../../confidentiality/Confidentiality"
import Container from "../../../container/Container"
//styles
import './callModalView.css'
//config
import {mask} from "../../../../config/config"

export default function CallModalView({title}) {
    return (
        <Form
            submitHandler={(data) => {
                console.log('heh')
            }}
            render={
                ({register, control, formState, getValues, errors}, isValidInput, Controller) => (
                    <Container className={'container_mobile'}>
                        {
                            title && <h3 className={'callModalView__header'}>{title}</h3>
                        }
                        <Input
                            className={'callModalView__input'}
                            isValid={isValidInput('name')}
                            name={'name'}
                            placeholder={'Имя'}
                            register={register({required: true})}
                        />

                        <Controller
                            as={InputMask}
                            control={control}
                            name={'phone'}
                            placeholder={'Телефон'}
                            className={'input callModalView__input input_required_true input_isValid_' + isValidInput('phone')}
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
                        <Button
                            type={'input'}
                            className={'callModalView__btn'}
                            mod={'_transparent'}
                            disabled={!formState.isValid}
                        >
                            Оставить заявку
                        </Button>
                        <Confidentiality
                            className={'callModalView__confidentiality'}
                            register={register({required: true})}
                            customText={
                                <React.Fragment>
                                    «Политики конфиденциальности <br/> и обработки персональных данных»
                                </React.Fragment>
                            }
                        />
                    </Container>
                )
            }/>

    )
}
