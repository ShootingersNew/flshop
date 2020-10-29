//libs
import React from "react"
//comps
import withBDItemsConnect from "../../hoc/withBDItemsConnect"
import Showcase from "../../components/showcase/Showcase"
import Main from "../../components/main/Main"
import ListingSidebar from "../../components/listingSidebar/ListingSidebar"
import Filters from "../../components/filters/Filters"
import AsideBanners from "../../components/asideBanners/AsideBanners"
//utils
import {FilterItems} from "../../config/utils";
import Button from "../../components/button/Button";
import Container from "../../components/container/Container";

class ListingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showWithSale: true,
            checkboxes: {},
            price: {value: {min: 1000, max: 6000}},
            filtersOpened: 1

        };
        this.setFilters.bind(this);
        this.getFilterTagsToArr.bind(this);
        this.uncheckCheckbox.bind(this);
        this.uncheckAllCheckboxes.bind(this);
        this.countOpenedFilters.bind(this)
    }

    setFilters = (obj) => {
        this.setState(obj)
    };
    uncheckCheckbox = (name, val) => {
        //if type of checkboxes is radio, their values are array. Default-string
        if (typeof this.state.checkboxes[name] === "string") {
            let newArr = this.state.checkboxes;
            delete newArr[name];
            this.setState({checkboxes: newArr})
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

    //this function to count opened filters in Filter comp,
    // if less than 1 banner is open, Aside Banners does not display a banner
    countOpenedFilters = (i) => {
        let newCounter = this.state.filtersOpened + i;
        this.setState({filtersOpened: newCounter})
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
            <React.Fragment>
                <Main
                    className={'main_listing'}
                    container={true}

                    breadcrumbsArray={
                        [
                            {title: 'Главная', path: '/'},
                            {title: 'Каталог'}
                        ]
                    }
                    content={
                        <React.Fragment>
                            <Showcase
                                counter={filteredItems.length}
                                showcaseType={'listing'}
                                mobileLink={false}
                                header={'Букеты'}
                                idx={'allItems'}
                                goods={filteredItems}
                                filterTags={this.getFilterTagsToArr()}
                                uncheckCheckbox={this.uncheckCheckbox}
                            />
                        </React.Fragment>
                    }
                    aside={(closeAsideFunc) => (
                        <ListingSidebar>
                            <Filters
                                closeAside={closeAsideFunc}
                                className={'listingSidebar__filters'}
                                setFilters={this.setFilters}
                                filtersState={this.state}
                                uncheckAllCheckboxes={this.uncheckAllCheckboxes}
                                countOpenedFilters={this.countOpenedFilters}
                            />
                            {/*if opened more than 2 filter fieldsets && 7 or more items in showcase, then the banners are not displayed*/}
                            <AsideBanners
                                id={'listing'}
                                count={this.state.filtersOpened < 2 && filteredItems.length >= 7 ? 1 : 0}
                                type={'tall'}
                                className={'listingSidebar__aside'}
                            />
                        </ListingSidebar>
                    )}

                    mobileButton={(clickHandler) => (
                        <Container className={'container_mobile listingSidebar__sticky'}>
                            <Button onClick={clickHandler} className={'listingSidebar__mobileButton'}>
                                Фильтры
                            </Button>
                        </Container>
                    )}

                />
            </React.Fragment>

        )
    }
}


export default withBDItemsConnect(ListingPage)
