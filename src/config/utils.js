// small functions that play the role of 'utilities'

//this func is for adding whitespace in price ('5 000')
import {useLayoutEffect, useState} from "react";

const regExpPrice = (price) => {
    return price.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1 ");
};

//this function is for filtering items according to checkboxes
class FilterItems {
    constructor(arr, goods) {
        this.filtersArr = arr;
        this.goods = goods;
        //object of tests for checkboxes
        this.tests = {
            showWithSale: (item, filters) => {
                if (filters.showWithSale === true) {
                    return item.sale === filters.showWithSale
                } else {
                    return true;
                }
            },
            price: (item, filters,) => {
                return filters.price.value.min <= item.price && item.price <= filters.price.value.max
            },
            flowerQuantity: (item, filters) => {
                let val = filters.flowerQuantity.split(' - ');
                return val[0] <= item.flowersAmount && item.flowersAmount <= val[1];
            },
            color: (item, filters) => {
                return this._testIncluded(filters.color, item.color)
            },
            flowers: (item, filters) => {
                return this._testIncluded(filters.flowers, [item.category, ...item.additionalCategories])
            },
            for: (item, filters) => {
                return this._testIncluded(filters.for, item.for)
            }
        };
    }

    _testIncluded(filterData, itemArrAttrs) {
        //check if an arr includes the checked attributes,contains in filter data
        if (typeof filterData === 'object') {
            return filterData.every((attr) => (itemArrAttrs.includes(attr)))
        } else {
            return itemArrAttrs.includes(filterData)
        }
    }

    //    _pass returns true if no one filter return false
    _pass(good, filtersArr) {
        // if the method has no parameter filtersArr, we use the general value as filters
        const filters = filtersArr ? filtersArr : this.filtersArr;
        let matched = true;
        for (let filter in filters) {
            if ((this.tests[filter] !== undefined && !this.tests[filter](good, filters)) || (filter === 'checkboxes' && !this._pass(good, this.filtersArr.checkboxes))) {
                matched = false;
                break;
            }
        }
        return matched
    }

    //filter arr of items and get new arr of filtered items
    filteredArr() {
        const filtered = this.goods.filter((good) => {
            return this._pass({...good})
        });
        //if we need sort items by price
        if (this.filtersArr.checkboxes.sortBy) {
            return filtered.sort((a, b) => {
                if (this.filtersArr.checkboxes.sortBy === 'По возрастанию') {
                    return a.price - b.price
                } else {
                    return b.price - a.price
                }
            })
        } else {
            return filtered
        }

    }

}

//imitation of loading
function loadImit(func) {
    func('loading');
    setTimeout(() => {
        func('loaded')
    }, 1500);
}

function getScrollbarWidth() {
    var div = document.createElement('div');
    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    var scrollWidth = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);
    return scrollWidth
}

//hook for determining whether the resolution is mobile
function useIsMobile(getFullRes) {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }

        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    if (getFullRes) {
        return size;

    } else {
        return size[0] <= process.env.REACT_APP_MOBILE_BREAKPOINT;
    }
}

export {regExpPrice, FilterItems, loadImit, getScrollbarWidth, useIsMobile}
