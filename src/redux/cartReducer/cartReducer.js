import {ADD_ITEM} from "./actions";

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
    ]
};
export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM:
            return {...state, itemsIn: [...state.itemsIn, action.item]};
        default:
            return state
    }
}