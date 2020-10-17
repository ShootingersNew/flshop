import React from "react"
import Container from "../container/Container"
import './style.css'

const MobileDescription = ({src, desc, title}) => {
    return (
        <div className={'mobileDescription'}>
            <div style={{backgroundImage: `url(${src})`}} className="mobileDescription__image"/>
            <div className="mobileDescription__content">
                <Container className={'mobileDescription__container'}>
                    <h1 className="mobileDescription__header">Авторский букет «Розовое превосходство»</h1>
                    <div className="mobileDescription__text">
                        Букет станет отличным подарком для девушки на любой праздник. Известная композиция Ларии Лучевой
                        подарит приятные эмоции
                        и тонкий цветочный аромат белых роз и статицы
                    </div>
                </Container>
            </div>
        </div>
    )
};
export default MobileDescription
