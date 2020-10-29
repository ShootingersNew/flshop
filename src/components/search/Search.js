//libs
import React from "react"
import SimpleBar from "simplebar-react";
import Fuse from "fuse.js"
import Container from "../container/Container";
import {Link} from "react-router-dom"
import PropTypes from 'prop-types'
import cn from "classnames"
//styles
import './search.css'
import './simplebar.min.css'

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.searchRef = React.createRef();
        this.state = {
            searchResults: [],
            isSearchTouched: false,
            isOpened: false,
            flowers: [],
            default: []
        };
    }

    static propTypes = {
        className: PropTypes.string,
        defaultItems: PropTypes.bool
    };

    componentDidMount() {
        const flowers = require('../../config/json/allItems');
        this.setState({flowers: flowers.allItems});
        if (this.props.defaultItems) {
            this.setState({default: flowers.allItems});
        }
        document.body.addEventListener('click', this.closeSearch);
    }

    componentWillUnmount() {
        document.body.removeEventListener('click', this.closeSearch);
    }

    closeSearch = (e) => {
        const domNode = this.searchRef.current;
        if ((!domNode || !domNode.contains(e.target))) {
            this.setState({
                isSearchTouched: false
            });
        }
    };

    search = (e) => {
        if (e.target.value.length !== 0) {
            const options = {
                shouldSort: true,
                threshold: 0.2,
                keys: [
                    {
                        name: 'name',
                    },
                ]
            };
            const fuse = new Fuse(this.state.flowers, options);
            this.setState({
                isSearchTouched: true,
                searchResults: fuse.search(e.target.value)
            });

        } else {
            this.setState({isSearchTouched: false});
        }

    };
    renderItems = () => {
        // const arr = defaultItems || items || [];
        let arr = () => {
            if (this.props.defaultItems.length !== 0 && this.state.searchResults.length === 0) {
                return this.state.default
            } else {
                return this.state.searchResults
            }

        };
        return arr().map((result) => {
                const res = result.item || result;
                return (
                    <li
                        className={'search__li'}
                        onClick={() => {
                            this.setState({isSearchTouched: false})
                        }}
                    >
                        <Link className={'search__link'} to={'/goods/allItems/' + res.id}>
                            <Container className="container_mobile search__linkContainer">
                                <img src={res.src} alt="" className="search__img"/>
                                <div className="search__info">
                                    <p className="search__header"> {res.name}</p>
                                    <div className="search__composition">
                                        {res.composition && res.composition.map((item, idx) => {

                                            if (this.props.defaultItems && idx === 1) {
                                                return <span> {item.name + ' ' + item.amount + '..'}</span>
                                            } else {
                                                return <span> {item.name + ' ' + item.amount + ', '}</span>
                                            }
                                        })}
                                    </div>
                                </div>
                            </Container>
                        </Link>
                    </li>
                )
            }
        )
    };
    searchResults = () => {
        return <div className="search__layout ">
            <ul className="search__result-list">
                <SimpleBar className={'search__bar'}>
                    {
                        this.renderItems()
                    }
                </SimpleBar>
            </ul>
        </div>
    };

    render() {
        let {className, defaultItems} = this.props;
        let searchClass = cn({
            search: true,
            [className]: [className]
        });
        return (
            <div className={searchClass} ref={this.searchRef}>
                {
                    defaultItems && this.searchResults()
                }
                <Container className="container container_mobile">
                    <input
                        className={`search__input fonts__proximaNovaRegular`}
                        placeholder={'Поиск по товарам'}
                        type="text"
                        onChange={this.search}
                        onFocus={this.search}
                    />
                </Container>

                {!!!defaultItems && this.state.isSearchTouched && this.state.searchResults.length !== 0
                && this.searchResults()
                }
            </div>
        )
    }
}
