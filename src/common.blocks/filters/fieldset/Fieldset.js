//libs
import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types'
//comps
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
            'Лиллии',
            'Розы',
            'Гвоздики',
            'Ромашки',
            'Орхидеи'
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

    useEffect(() => {
        if (props.isDefaultOpened) {
            setIsOpened(props.isDefaultOpened)
        }
    }, [props.isDefaultOpened]);

    function mapCheckboxes(name, type) {
        return addFilterArr[name].map((checkbox, idx) => {

            return (
                <label key={idx} className={'filters__label'}>

                    {
                        type === 'radio' ?
                            <Checkbox
                                controlled={true} type={type}
                                checked={props.hasOwnProperty('filters') && props.filters[name] === checkbox}
                                value={checkbox} name={name}
                                className={'checkbox_red'}
                            />
                            :
                            <Checkbox
                                type={type}
                                checked={props.hasOwnProperty('filters') && props.filters[name] && props.filters[name].includes(checkbox)}
                                value={checkbox} name={name}
                                className={'filters__checkbox checkbox_small-arrow'}
                            />
                    }
                    <span className="filters__text"> {checkbox}</span>
                </label>
            )
        })
    }

    function openHandler() {
        setIsOpened(!isOpened);
        isOpened ? props.countOpenedFilters(-1) : props.countOpenedFilters(1);
        setIsChanged(true);
    }

    return (
        <fieldset className={'filters__fieldset filters__fieldset_opened_' + isOpened}>
            <legend onClick={() => {
                openHandler()
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
Fieldset.propTypes = {
    checkboxName: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    filters: PropTypes.object.isRequired,
    header: PropTypes.string.isRequired,
    isDefaultOpened: PropTypes.bool,
    countOpenedFilters: PropTypes.func.isRequired
};
export default Fieldset