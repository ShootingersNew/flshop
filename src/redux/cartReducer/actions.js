export const ADD_ITEM = 'ADD_ITEM';
export const CHANGE_QUANTITY = 'CHANGE_QUANTITY';
export const REMOVE_ITEM = 'REMOVE_ITEM';

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

function removeItem(id) {
    console.log(id)
    return {
        type: REMOVE_ITEM,
        id
    }
}

export {addItem, changeQuantity, removeItem}