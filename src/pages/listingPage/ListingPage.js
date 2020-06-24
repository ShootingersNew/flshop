//libs
import React from "react"
//comps
import withBDItemsConnect from "../../hoc/withBDItemsConnect"
import Container from "../../common.blocks/container/Container"
import Breadcrumbs from "../../common.blocks/breadcrumbs/Breadcrumbs"
import Showcase from "../../common.blocks/showcase/Showcase"
import Main from "../../common.blocks/main/Main"
import ListingSidebar from "../../common.blocks/listingSidebar/ListingSidebar"
import Filters from "../../common.blocks/filters/Filters"
import AsideBanners from "../../common.blocks/asideBanners/AsideBanners"
//utils
import {FilterItems} from "../../config/utils";

class ListingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showWithSale: true,
            checkboxes: {},
            price: {value: {min: 1000, max: 6000}}

        };
        this.setFilters.bind(this);
        this.getFilterTagsToArr.bind(this);
        this.uncheckCheckbox.bind(this);
        this.uncheckAllCheckboxes.bind(this);
    }

    setFilters = (obj) => {
        this.setState(obj)
    };
    uncheckCheckbox = (name, val) => {
        //if type of checkboxes is radio, their values are array. Default-string
        if (typeof this.state.checkboxes[name] === "string") {
            this.setState({checkboxes: {...this.state.checkboxes, [name]: ''}})
        } else {
            //filter array
            let newArr = this.state.checkboxes[name].filter((filterVal) => {
                return filterVal !== val
            });
            this.setState({checkboxes: {...this.state.checkboxes, [name]: newArr}})
        }
    };
    uncheckAllCheckboxes = (e) => {
        e.preventDefault();
        this.setState({
            checkboxes: {}
        })
    };
    getFilterTagsToArr = () => {
        const {checkboxes} = this.state;
        const categoriesJson = require('../../config/json/categories');
        let filterTags = [];
        for (let checkbox in checkboxes) {
            const checkboxVal = checkboxes[checkbox];
            if (categoriesJson.hasOwnProperty(checkbox)) {
                if (typeof checkboxVal === 'object') {
                    const mappedObjectValue = checkboxVal.map((arrItem) => {
                        return {name: checkbox, val: arrItem, resultCounter: categoriesJson[checkbox][arrItem]};
                    });
                    filterTags = [...filterTags, ...mappedObjectValue];
                } else {
                    const newTag = {
                        name: checkbox,
                        val: checkboxVal,
                        resultCounter: categoriesJson[checkbox][checkboxVal]
                    };
                    filterTags.push(newTag)
                }
            }
        }
        return filterTags
    };

    render() {
        const filteredItems = new FilterItems(this.state, this.props.goods).filteredArr();
        return (
            <Container>
                <Breadcrumbs
                    items={
                        [
                            {title: 'Главная', path: '/'},
                            {title: 'Каталог'}
                        ]
                    }
                />
                {/*aside*/}
                <ListingSidebar>
                    <Filters
                        setFilters={this.setFilters}
                        filtersState={this.state}
                        uncheckAllCheckboxes={this.uncheckAllCheckboxes}
                    />
                    <AsideBanners
                        id={'cart'}
                        count={1}
                    />
                </ListingSidebar>
                <Main className={'main_inlineBlock main_listing'}>
                    <Showcase
                        counter={filteredItems.length}
                        showcaseType={'listing'}
                        header={'Букеты'}
                        idx={'allItems'}
                        goods={filteredItems}
                        filterTags={this.getFilterTagsToArr()}
                        uncheckCheckbox={this.uncheckCheckbox}
                    />
                </Main>

            </Container>
        )
    }
}


export default withBDItemsConnect(ListingPage)