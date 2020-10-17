import React from "react"
import InfoContainer from "./InfoContainer"
import Container from "../container/Container";

const CompositionDescription = (props) => {
    return (
        <InfoContainer key={props.name} name={props.name} render={(name) => {
            return (
                <div className={'composition__info-inner'}>
                    <div className="composition__info">
                        <div className="composition__desc-text">
                            <Container className={'container_mobile'}>
                                {/*for mobiles */}
                                <div className={'composition__link composition__link_mobile'}>
                                    <span className={'composition__linkText fonts__proximaNovaBold'}>{props.name}</span>
                                    <span className="composition__amount"> {props.amount}</span>
                                </div>

                                Тут была бы информация о цветке, на который вы навелись ( {name} ) но это лишь пример.
                                Удачного дня
                            </Container>
                        </div>

                    </div>
                    <picture className={'composition__img'}>
                        <source srcSet="/images/composition/1.png" media="(min-width: 600px)"/>
                        <img src="/images/composition/m.1.png" alt=""/>
                    </picture>
                </div>
            )
        }}/>
    )
};
export default CompositionDescription
