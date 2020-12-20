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
import PhotoReview from "../photoReviews/PhotoReviews";
//styles
import './showcase.css'

Showcase.propTypes = {
    showcaseType: PropTypes.string,
    header: PropTypes.string.isRequired,
    counter: PropTypes.number.isRequired,
    filterTags: PropTypes.array,
    goods: PropTypes.array.isRequired,
    mobileLink: PropTypes.bool,
    listingLink: PropTypes.bool,
    isMobile: PropTypes.bool,
    mobileContainer: PropTypes.bool
};

function Showcase(props) {
    let className = cn({
        showcase: true,
        [`showcase_${props.showcaseType}`]: props.showcaseType,
        showcase_mobile: props.isMobile
    });

    const renderItems = () => {
        //pass refs to bouquet
        const FunctionalArticle = forwardRef((props, ref) => (
            <div ref={ref} className={'showcase__animation-wrapper'}>
                {props.children}
            </div>
        ));

        let card = (item, i) => {
            if (props.showcaseType && props.showcaseType === 'photoReview') {
                return (
                    <div key={i} className="showcase__animation-wrapper">
                        <PhotoReview/>
                    </div>
                )
            } else {
                return (
                    <FunctionalArticle key={item.id}>
                        <Bouquet item={item}/>
                    </FunctionalArticle>
                )
            }
        };

        let mappedItems = () => {
            return props.goods.map((item, i) => {
                return card(item, i)
            })
        };

        let wrapper = (items) => {
            if (props.showcaseType && props.showcaseType === 'photoReview') {
                return (
                    <div className={'showcase__items'}>
                        {
                            items()
                        }
                    </div>
                )
            } else {
                return <FlipMove className={'showcase__items'}>
                    {
                        items()
                    }
                </FlipMove>
            }
        };
        // const item=props.type && props.type==='photoReviews'? <PhotoReview/>:;
        return (
            wrapper(mappedItems)
        )

    };

    function mapFilterTags(arr) {
        return arr.map((filterTag, i) => {
            return (

                <div key={i} className="showcase__filter "
                     onClick={() => props.uncheckCheckbox(filterTag.name, filterTag.val)}>
                    {filterTag.val}
                    <span className="showcase__filterCounter">{' ' + filterTag.resultCounter}</span>
                    <span
                        className="showcase__closeButton icon-svg__cross"/>
                </div>)
        })
    }

    const counterClassNames = cn({
        showcase__counter: true,
        showcase__counter_small: props.showcaseType !== 'listing' && props.listingLink !== false
    });
    const containerClassNames = cn({
        showcase__container: true,
        container_mobile: props.mobileContainer
    });
    return (
        <div className={className}>
            <Container className={containerClassNames}>
                <div className="showcase__header">
                    <span className="showcase__headerText">{props.header}</span>
                    {
                        props.counter !== undefined && props.showcaseType === 'listing' &&
                        <span className={'showcase__counter fonts__proximaNovaSemibold'}>{props.counter}</span>
                    }
                    {
                        props.showcaseType !== 'listing' ?
                            <React.Fragment>
                                {
                                    props.listingLink !== false &&
                                    <Link className={'showcase__link link'} to={'/catalog'}>Смотреть все товары</Link>
                                }
                                <span className={counterClassNames}>{props.counter}</span>
                            </React.Fragment>
                            : false
                    }
                    {/*filters*/}
                    {
                        props.showcaseType === 'listing' &&
                        <div className="showcase__filters">
                            {props.filterTags && props.filterTags.length !== 0 && mapFilterTags(props.filterTags)}
                        </div>
                    }
                </div>

                {
                    renderItems()
                }

                {
                    props.mobileLink &&
                    <Link className={'showcase__link link showcase__link_mobile'} to={'/catalog'}>Смотреть все</Link>
                }
            </Container>
        </div>
    )
}

export default withBDItemsConnect(Showcase)
