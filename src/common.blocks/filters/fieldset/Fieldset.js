import React, {useState} from "react";
import Checkbox from "../../checkbox/Checkbox";

const Fieldset = (props) => {

    const addFilterArr = {
        flowerQuantity: [
            '10 - 20',
            '20 - 30',
            '30 - 100',
        ],
        color: [
            'Зеленый',
            'Красный',
            'Фиолетовый',
            'Синий',
            'Оранжевый',
            'Желтый',
            'Белый'
        ],
        sortBy: [
            'По возрастанию',
            'По убыванию'
        ],
        flowers: [
            'Хризантемы',
            'Подсолнухи',
            'Гортензии',
            'Тюльпаны',
            'Пионы',
            'Ирисы',
        ],
        for: [
            'Маме',
            'Девушке',
            'Мужчине',
            'Дедушке',
        ],
    };
    const [isOpened, setIsOpened] = useState(false);
    const [isChanged, setIsChanged] = useState(false);

    function mapCheckboxes(name, type) {
        return addFilterArr[name].map((checkbox) => {

            return (
                <label className={'filters__label'}>

                    {
                        type === 'radio' ?
                            <Checkbox controlled={true} type={type}
                                      checked={props.hasOwnProperty('filters') && props.filters[name] === checkbox}
                                      value={checkbox} name={name}/>
                            :
                            <Checkbox type={type}
                                      checked={props.hasOwnProperty('filters') && props.filters[name] && props.filters[name].includes(checkbox)}
                                      value={checkbox} name={name}/>
                    }
                    <span className="filters__text"> {checkbox}</span>
                </label>
            )
        })
    }


    return (
        <fieldset className={'filters__fieldset filters__fieldset_opened_' + isOpened}>
            <legend onClick={() => {
                setIsOpened(!isOpened);
                setIsChanged(true)
            }} className={'filters__legend fonts__proximaNovaBold'}>
                <span
                    className={"icon-svg__arrow filters__tick filters__tick_animationReady_" + isChanged}/> {props.header}
            </legend>
            <div className={'filters__content'}>
                {
                    mapCheckboxes(props.checkboxName, props.type)
                }
            </div>
        </fieldset>
    )
};
export default Fieldset