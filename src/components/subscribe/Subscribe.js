//libs
import React from "react"
//comps
import Input from "../input/Input"
import Button from "../button/Button"
import Form from "../form/Form"
import Container from "../container/Container";
//utils
import {emailRegexp} from "../../config/config"
//styles
import './subscribe.css'

export default function Subscribe() {
    return (
        <div className="subscribe">
            <Container className={'subscribe__container'}>

                <h3 className="subscribe__header fonts__proximaNovaBlack">Еженедельные скидки и акции</h3>
                <Form className={"subscribe__form"} render={({register}, isInputValid) => (
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
            </Container>

        </div>
    )
}
