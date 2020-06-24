//libs
import React from "react";
import {Link} from "react-router-dom"
import cn from 'classnames'
import PropTypes from 'prop-types'
//comps
import Container from "../container/Container"
import Bouquet from "../bouquet/Bouquet"
import withBDItemsConnect from "../../hoc/withBDItemsConnect"
//styles
import './../link/link.css'
import './showcase.css'
import './../fonts/__proximaNovaSemibold/fonts__proximaNovaSemibold.css'

Showcase.propTypes = {
    showcaseType: PropTypes.string,
    header: PropTypes.string.isRequired,
    counter: PropTypes.number.isRequired,
    filterTags: PropTypes.array.isRequired,
    goods: PropTypes.array.isRequired
};

function Showcase(props) {
    let className = cn({
        showcase: true,
        [`showcase_${props.showcaseType}`]: props.showcaseType
    });


    function mapFilterTags(arr) {
        return arr.map((filterTag) => {
            return (
                <div className="showcase__filter">
                    {filterTag.val}
                    <span className="showcase__filterCounter">{filterTag.resultCounter}</span>
                    <span
                        onClick={() => props.uncheckCheckbox(filterTag.name, filterTag.val)}
                        className="showcase__closeButton icon-svg__cross"/>
                </div>)
        })
    }

    return (
        <div className={className}>
            <Container classname={'showcase__container'}>
                <div className="showcase__header">
                    {props.header}
                    {
                        props.counter !== undefined &&
                        <span className={'showcase__counter fonts__proximaNovaSemibold'}>{props.counter}</span>
                    }
                    {props.showcaseType !== 'listing' &&
                    <Link className={'showcase__link link'} to={'/'}>Смотреть все товары</Link>
                    }
                    {
                        props.showcaseType === 'listing' &&
                        <div className="showcase__filters">
                            {props.filterTags && props.filterTags.length !== 0 && mapFilterTags(props.filterTags)}
                        </div>
                    }
                </div>
                <div className="showcase__items">
                    {/*если в этот компонент hoc'ом был передан объект с итемами, то рендерим*/}
                    {props.goods ?
                        props.goods.map((item) => {
                            return <Bouquet item={item}/>
                        })
                        : null
                    }
                </div>
            </Container>
        </div>
    )
}

export default withBDConnect(Showcase)