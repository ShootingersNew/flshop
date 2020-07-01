//libs
import React from "react"
//comps
import Input from "../input/Input"
import Button from "../button/Button"
import Form from "../form/Form"
//utils
import {emailRegexp} from "../../config/config"
//styles
import './subscribe.css'

export default function Subscribe() {
    return (
        <div className="subscribe">
            <div className="subscribe__container">
                <h3 className="subscribe__header fonts__proximaNovaBold">Еженедельные скидки и акции</h3>
                <Form render={({register}, isInputValid) => (
                    <div className="subscribe__input-wrapper">
                        <Input
                            register={register({
                                pattern: emailRegexp
                            })}
                            isValid={isInputValid('mail')}
                            name={'mail'}
                            className={'subscribe__input'}
                            placeholder={'E-mail'}
                        />
                        <Button className={'fonts__proximaNovaBold'} type={'input'}>Подписаться</Button>
                    </div>
                )}
                >
                </Form>
            </div>
        </div>
    )
}