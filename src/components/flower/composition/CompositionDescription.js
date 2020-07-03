import React from "react";
import InfoContainer from "./InfoContainer";

const CompositionDescription = (props) => {
    return (
        <InfoContainer name={props.name} render={(name) => {
            return (
                <div className={'composition__info-inner'}>
                    <div className="composition__info">
                        <div className="composition__desc-text">
                            Тут была бы информация о цветке, на который вы навелись ( {name} ) но это лишь пример.
                            Удачного дня
                        </div>

                    </div>
                    <img className="composition__img" src="/images/composition/1.png" alt="Роза кустовая"/>
                </div>
            )
        }}/>
    )
};
export default CompositionDescription