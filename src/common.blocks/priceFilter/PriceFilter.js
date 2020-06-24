//libs
import React, {Component} from 'react'
import InputRange from 'react-input-range'
import PropTypes from 'prop-types'
//styles
import 'react-input-range/lib/css/index.css'
import './priceFilter.css'
//config
import {regExpPrice} from "../../config/utils"

class PriceFilter extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            value: {min: 1000, max: 6000},
        };
    }

    static propTypes = {
        changeHanlder: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.changeHandler({...this.state})
    }

    render() {

        return (
            <div className={'priceFilter'}>
                <InputRange
                    maxValue={10000}
                    minValue={0}
                    value={this.state.value}
                    onChange={value => this.setState({value})}
                    onChangeComplete={value => {
                        this.props.changeHandler({value})
                    }}
                />
                <span className="priceFilter__min">{regExpPrice(this.state.value.min)}</span>
                <span className="priceFilter__max">{regExpPrice(this.state.value.max)}</span>
            </div>
        )
    }
}

export default PriceFilter