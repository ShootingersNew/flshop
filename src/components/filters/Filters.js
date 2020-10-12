//libs
import React, {useEffect, useState} from "react"
import cn from 'classnames'
//comps
import PriceFilter from "../priceFilter/PriceFilter"
import Checkbox from "../checkbox/Checkbox"
import Button from "../button/Button"
import Fieldset from "./fieldset/Fieldset"
import {useIsMobile} from "../../config/utils"
//styles
import './filters.css'
import 'rc-slider/assets/index.css'
import Container from "../container/Container"

const Filters = ({className, filtersState, countOpenedFilters, setFilters, uncheckAllCheckboxes, closeAside}) => {
    const isMobile = useIsMobile();
    const [localFilterState, setLocalFilterState] = useState({
        checkboxes: {},
        filtersOpened: 1,
        price: {},
        showWithSale: true
    });

    //set price
    const setPrice = (obj) => {
        setFilters({price: obj});
        setLocalFilterState({...localFilterState, price: obj})
    };

    useEffect(() => {
        if (isMobile) {
            setLocalFilterState(filtersState)
        }
    }, [filtersState, isMobile]);
    const checkboxHandler = (e) => {
        let oldFilters = !isMobile ? filtersState : localFilterState;
        let oldCheckboxArray = oldFilters.checkboxes;
        let newFiltersObj = {};

        const {name, value} = e.target;

        const type = e.target.getAttribute('data-inputType');

        //for radio inputs
        if (type === 'radio') {
            if (oldCheckboxArray && oldCheckboxArray[name] && oldCheckboxArray[name] === value) {
                // if this checkbox is already checked and we click on it, we remove this attribute from the checkboxes arr
                let newCheckboxesState = oldCheckboxArray;
                delete newCheckboxesState[name];

                newFiltersObj = {...oldFilters, checkboxes: newCheckboxesState}

            } else {
                newFiltersObj = {...oldFilters, checkboxes: {...oldCheckboxArray, [name]: value}};

            }
            //    for checkboxes
        } else {
            //if such a value already exists in the array
            if (oldCheckboxArray[name] && oldCheckboxArray[name].includes(value)) {
                //    remove this val from arr
                const newCheckboxArr = oldCheckboxArray[name].filter((checkbox) => {
                    return checkbox !== value
                });
                newFiltersObj = {
                    ...oldFilters,
                    checkboxes: {...oldCheckboxArray, [name]: newCheckboxArr}
                };

            } else {
                //if the array already contains values
                if (oldCheckboxArray[name] && oldCheckboxArray[name].length !== 0) {
                    newFiltersObj = {
                        ...oldFilters,
                        checkboxes: {
                            ...oldCheckboxArray,
                            [name]: [...oldCheckboxArray[name], value]
                        }
                    }
                } else {
                    newFiltersObj = {
                        ...oldFilters,
                        checkboxes: {
                            ...oldCheckboxArray,
                            [name]: [value]
                        }
                    };
                }

            }
        }
        console.log(newFiltersObj.checkboxes);
        applyChanges(newFiltersObj)
    };

    const applyChanges = ((arr) => {
        if (isMobile) {
            setLocalFilterState({...arr});
        } else {
            setFilters(arr)
        }
    });
    const mobileSubmitFilters = (e) => {
        e.preventDefault();
        closeAside();
        setFilters(localFilterState)
    };
    const setSale = (e) => {
        setLocalFilterState({...localFilterState, showWithSale: e.target.checked});
        setFilters({showWithSale: e.target.checked})
    };
    const filterClassNames = cn({
        filters: true,
        [`${className}`]: className
    });

    // if the resolution is mobile - we use an array from the state. else - from props
    const propFilters = isMobile ? localFilterState : filtersState;

    return (
        <React.Fragment>
            <Container className={' listingSidebar__container container_mobile'}>
                <form className={filterClassNames}>
                    <h4 className={'filters__main-header fonts__proximaNovaSemibold'}>Фильтры</h4>
                    <div className="filters__single-filter">
                        <h5 className="filters__header fonts__proximaNovaBold">Цена</h5>

                        <PriceFilter
                            changeHandler={setPrice}
                        />

                    </div>
                    <div className="filters__single-filter">
                        <label className={'filters__label'}>
                            <Checkbox
                                name={'showWithSale'}
                                controlled={true}
                                checked={propFilters.showWithSale}
                                onChange={setSale}
                                type={'checkbox'}
                                className={'checkbox_red'}
                            />
                            <span className={'filters__text'}>Товары со скидкой</span>
                        </label>
                    </div>
                    <div className="filters__additional" onChange={checkboxHandler}>

                        <Fieldset
                            checkboxName={'flowerQuantity'}
                            type={'radio'}
                            header={'Количество цветов'}
                            filters={propFilters.checkboxes}
                            countOpenedFilters={countOpenedFilters}
                        />

                        <Fieldset
                            checkboxName={'color'}
                            type={'checkbox'}
                            header={'Окрас букета'}
                            filters={propFilters.checkboxes}
                            countOpenedFilters={countOpenedFilters}
                        />

                        <Fieldset
                            checkboxName={'sortBy'}
                            type={'radio'}
                            filters={propFilters.checkboxes}
                            header={'Сортировать'}
                            countOpenedFilters={countOpenedFilters}
                        />

                        <Fieldset
                            checkboxName={'flowers'}
                            type={'radio'}
                            filters={propFilters.checkboxes}
                            header={'Цветы'}
                            isDefaultOpened={true}
                            countOpenedFilters={countOpenedFilters}
                        />
                        <Fieldset
                            checkboxName={'for'}
                            type={'radio'}
                            filters={propFilters.checkboxes}
                            header={'Кому'}
                            countOpenedFilters={countOpenedFilters}
                        />

                    </div>
                </form>
            </Container>
            <div className="filters__footer">
                <Button
                    mod={'filter button_transparent'}
                    className={'filters__button'}
                    onClick={uncheckAllCheckboxes}>
                    Очистить
                    фильтры
                </Button>
                <div className="filters__mobile-menu">
                    <Button onClick={mobileSubmitFilters} className={'filters__apply'}>Применить</Button>
                    <Button onClick={closeAside} mod={'transparent'} className={'filters__close'}>Закрыть</Button>
                </div>
            </div>
        </React.Fragment>
    )

};
export default Filters
