//libs
import React, {forwardRef} from "react";
import {Link} from "react-router-dom"
import cn from 'classnames'
import PropTypes from 'prop-types'
import FlipMove from 'react-flip-move'
//comps
import Container from "../container/Container"
import Bouquet from "../bouquet/Bouquet"
import withBDItemsConnect from "../../hoc/withBDItemsConnect"
//styles
import './showcase.css'

Showcase.propTypes = {
    showcaseType: PropTypes.string,
    header: PropTypes.string.isRequired,
    counter: PropTypes.number.isRequired,
    filterTags: PropTypes.array,
    goods: PropTypes.array.isRequired,
};

function Showcase(props) {
    let className = cn({
        showcase: true,
        [`showcase_${props.showcaseType}`]: props.showcaseType
    });

    const renderItems = () => {
        //pass refs to bouquet
        const FunctionalArticle = forwardRef((props, ref) => (
            <div ref={ref} className={'showcase__animation-wrapper'}>
                {props.children}
            </div>
        ));

        return props.goods.map((item) => {
            return (
                <FunctionalArticle key={item.id}>
                    <Bouquet item={item}/>
                </FunctionalArticle>
            )
        })
    };

    function mapFilterTags(arr) {
        return arr.map((filterTag) => {
            return (

                <div className="showcase__filter " onClick={() => props.uncheckCheckbox(filterTag.name, filterTag.val)}>
                    {filterTag.val}
                    <span className="showcase__filterCounter">{' ' + filterTag.resultCounter}</span>
                    <span
                        className="showcase__closeButton icon-svg__cross"/>
                </div>)
        })
    }

    return (
        <div className={className}>
            <Container className={'showcase__container'}>
                <div className="showcase__header">
                    <span className="showcase__headerText">{props.header}</span>
                    {
                        props.counter !== undefined && props.showcaseType === 'listing' &&
                        <span className={'showcase__counter fonts__proximaNovaSemibold'}>{props.counter}</span>
                    }
                    {props.showcaseType !== 'listing' &&
                    <React.Fragment>
                        <Link className={'showcase__link link'} to={'/catalog'}>Смотреть все товары</Link>
                        <span className={'showcase__counter showcase__counter_small'}>{props.counter}</span>
                    </React.Fragment>
                    }
                    {
                        props.showcaseType === 'listing' &&
                        <div className="showcase__filters">
                            {props.filterTags && props.filterTags.length !== 0 && mapFilterTags(props.filterTags)}
                        </div>
                    }
                </div>
                <FlipMove className={'showcase__items'}>
                    {/*если в этот компонент hoc'ом был передан объект с итемами, то рендерим*/}
                    {props.goods ?
                        renderItems()
                        : false
                    }
                </FlipMove>
                <Link className={'showcase__link link showcase__link_mobile'} to={'/catalog'}>Смотреть все</Link>
            </Container>
        </div>
    )
}

export default withBDItemsConnect(Showcase)
