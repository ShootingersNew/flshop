import {ADD_ITEM, CHANGE_QUANTITY, REMOVE_ITEM} from "./actions";

const initialState = {
    itemsIn: [
        {
            id: 1,
            name: 'Букет «Рубиновое сияние»',
            src: './images/bouquets/b1.png',
            price: 3150,
            vendorCode: '12934569',
            mark: 3,
            sale: false,
            salePrice: false,
            percents: false,
            category: 'Хризантемы',
            type: 'allItems',
            amount: 1,
            sumPrice: 3150,
            composition: [
                {name: 'Лист аспидистры', id: 'aspidistra', amount: 4},
                {name: 'Альстромерия', id: 'alstromeria', amount: 3},
                {name: 'Хризантема кустовая', id: 'hrizantema', amount: 1},
                {name: 'Рускус Зеленый', id: 'ruskus', amount: 7},
                {name: 'Гипсофила', id: 'gipsophila', amount: 3},
                {name: 'Гербера', id: 'gerbera', amount: 3},
            ],
            additional: [1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008,]
        },
        {
            id: 2,
            name: 'Шляпная коробка «Нежность»',
            src: './images/bouquets/b2.png',
            price: 4200,
            vendorCode: '19239247',
            mark: 3,
            sale: true,
            salePrice: 6300,
            percents: '-19%',
            category: 'Подсолнухи',
            type: 'allItems',
            amount: 1,
            sumPrice: 4200,
            composition: [
                {name: 'Эустома сиреневая', id: 'aystomasir', amount: 4},
                {name: 'Альстромерия', id: 'alstromeria', amount: 3},
                {name: 'Эустома лавандовая', id: 'aystomalav', amount: 1},
                {name: 'Рускус Зеленый', id: 'ruskus', amount: 2},
                {name: 'Гипсофила', id: 'gipsophila', amount: 3},
                {name: 'Гербера', id: 'gerbera', amount: 3},
            ],

            additional: [1002, 1004, 1005, 1008, 1001, 1007, 1006, 1003]

        },
    ],
    discount: [
        {
            minPrice: 2000,
            salePercent: 5,
        },
        {
            minPrice: 5000,
            salePercent: 10,
        },
        {
            minPrice: 10000,
            salePercent: 15,
        },
        {
            minPrice: 20000,
            salePercent: 20,
        },

    ],
};
export default function cartReducer(state = initialState, action) {
    const newArr = state.itemsIn;
    switch (action.type) {
        case ADD_ITEM:
            return {...state, itemsIn: [...state.itemsIn, {...action.item, amount: 1, sumPrice: action.item.price}]};
        case CHANGE_QUANTITY:
            const idx = state.itemsIn.findIndex((item) => (item.id === action.id));
            //копируем массив объектов, находящихся в корзине
            newArr[idx].amount = action.quantity;
            newArr[idx].sumPrice = action.quantity * newArr[idx].price;
            return {
                ...state,
                itemsIn: newArr
            };
        case REMOVE_ITEM:
            return {...state, itemsIn: state.itemsIn.filter((item) => (item.id !== action.id))};
        default:
            return state
    }
}