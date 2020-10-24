export const ADD_ITEM = 'ADD_ITEM';
export const CHANGE_QUANTITY = 'CHANGE_QUANTITY';
export const REMOVE_ITEMS = 'REMOVE_ITEMS';

function addItem(item) {
    return {
        type: ADD_ITEM,
        item
    }
}

function changeQuantity(id, quantity) {
    return {
        type: CHANGE_QUANTITY,
        id, quantity
    }
}

function removeItems(selectedIdArr) {
    return {
        type: REMOVE_ITEMS,
        selectedIdArr
    }
}

export {addItem, changeQuantity, removeItems}
