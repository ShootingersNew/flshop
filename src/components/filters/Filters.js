//libs
import React from "react"
//comps
import PriceFilter from "../priceFilter/PriceFilter"
import Checkbox from "../checkbox/Checkbox"
import Button from "../button/Button"
import Fieldset from "./fieldset/Fieldset"
//styles
import './filters.css'
import 'rc-slider/assets/index.css'

export default class Filters extends React.Component {
    constructor(props) {
        super(props);
        this.setPrice.bind(this);
        this.checkboxHandler.bind(this);
    }

    //set price
    setPrice = (obj) => {
        this.props.setFilters({price: obj})
    };
    checkboxHandler = (e) => {
        const {name, value} = e.target;
        const {checkboxes} = this.props.filtersState;
        const type = e.target.getAttribute('data-inputType');
        if (type === 'radio') {
            if (checkboxes[name] === value) {
                // if this checkbox is already checked and we click on it, we remove this attribute from the checkboxes arr
                let newCheckboxesState = checkboxes;
                delete newCheckboxesState[name];
                this.props.setFilters(newCheckboxesState)
            } else {
                this.props.setFilters({checkboxes: {...checkboxes, [name]: value}})
            }
        } else {
            if (checkboxes[name] && checkboxes[name].includes(value)) {
                //    remove this val from arr
                const newCheckboxArr = checkboxes[name].filter((checkbox) => {
                    return checkbox !== value
                });
                this.props.setFilters({checkboxes: {...checkboxes, [name]: newCheckboxArr}})
            } else {
                if (checkboxes[name] !== undefined && checkboxes[name].length !== 0) {
                    this.props.setFilters({
                        checkboxes: {...checkboxes, [name]: [...this.props.filtersState.checkboxes[name], value]}
                    })
                } else {
                    //else add this val to arr
                    this.props.setFilters({
                        checkboxes: {...checkboxes, [name]: [value]}
                    })
                }

            }
        }
    };


    render() {
        const {filtersState, setFilters} = this.props;
        return (
            <form className={'filters'}>
                <h4 className={'filters__main-header fonts__proximaNovaSemibold'}>Фильтры</h4>
                <div className="filters__single-filter">
                    <h5 className="filters__header fonts__proximaNovaBold">Цена</h5>

                    <PriceFilter
                        changeHandler={this.setPrice}
                    />

                </div>
                <div className="filters__single-filter">
                    <label className={'filters__label'}>
                        <Checkbox
                            name={'showWithSale'}
                            controlled={true}
                            checked={filtersState.showWithSale}
                            onChange={(e) => {
                                setFilters({showWithSale: e.target.checked})
                            }}
                            type={'checkbox'}
                            className={'checkbox_red'}
                        />
                        <span className={'filters__text'}>Товары со скидкой</span>
                    </label>
                </div>
                <div className="filters__additional" onChange={this.checkboxHandler}>

                    <Fieldset
                        checkboxName={'flowerQuantity'}
                        type={'radio'}
                        header={'Количество цветов'}
                        filters={filtersState.checkboxes}
                        countOpenedFilters={this.props.countOpenedFilters}
                    />

                    <Fieldset
                        checkboxName={'color'}
                        type={'checkbox'}
                        header={'Окрас букета'}
                        filters={filtersState.checkboxes}
                        countOpenedFilters={this.props.countOpenedFilters}
                    />

                    <Fieldset
                        checkboxName={'sortBy'}
                        type={'radio'}
                        filters={filtersState.checkboxes}
                        header={'Сортировать'}
                        countOpenedFilters={this.props.countOpenedFilters}
                    />

                    <Fieldset
                        checkboxName={'flowers'}
                        type={'radio'}
                        filters={filtersState.checkboxes}
                        header={'Цветы'}
                        isDefaultOpened={true}
                        countOpenedFilters={this.props.countOpenedFilters}
                    />

                    <Fieldset
                        checkboxName={'for'}
                        type={'radio'}
                        filters={filtersState.checkboxes}
                        header={'Кому'}
                        countOpenedFilters={this.props.countOpenedFilters}
                    />


                    <Button mod={'filter button_transparent'} className={'filters__button'}
                            onClick={this.props.uncheckAllCheckboxes}>
                        Очистить фильтры
                    </Button>

                </div>
            </form>
        )
    }
}
