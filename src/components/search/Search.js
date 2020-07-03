//libs
import React from "react"
import SimpleBar from "simplebar-react"
import Fuse from "fuse.js"
import {Link} from "react-router-dom"
import cn from "classnames"
//styles
import './search.css'

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.searchRef = React.createRef();
        this.state = {
            searchResults: [],
            isSearchTouched: false,
            isOpened: false,
            flowers: [],
        };
    }

    componentDidMount() {
        const flowers = require('../../config/json/allItems');
        this.setState({flowers: flowers});
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


    render() {
        let searchClass = cn({
            search: true,
            [this.props.class]: [this.props.class]
        });
        return (
            <div className={searchClass} ref={this.searchRef}>
                <input
                    className={`search__input fonts__proximaNovaRegular`}
                    placeholder={'Поиск по товарам'}
                    type="text"
                    onChange={this.search}
                    onFocus={this.search}
                />
                {this.state.isSearchTouched && this.state.searchResults.length !== 0
                && <div className="search__layout ">
                    <ul className="search__result-list">
                        <SimpleBar style={{maxHeight: 173}}>
                            {this.state.searchResults.map((res) =>
                                <li
                                    className={'search__li'}
                                    onClick={() => {
                                        this.setState({isSearchTouched: false})
                                    }}
                                >
                                    <Link className={'search__link'} to={'/goods/allItems/' + res.item.id}>
                                        <img src={res.item.src} alt="" className="search__img"/>
                                        <div className="search__info">
                                            <p className="search__header"> {res.item.name}</p>
                                            <div className="search__composition">
                                                {res.item.composition.map((item) => {
                                                    return item.name + ' ' + item.amount + ', '
                                                })}
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            )}
                        </SimpleBar>
                    </ul>
                </div>
                }
            </div>
        )
    }
}