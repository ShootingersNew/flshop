import React from "react";

const initialState = {
    goods: '',
    showcase_1: [

        {
            id: 1,
            name: 'Букет рубиное сияние',
            src: './images/bouquets/b1.png',
            url: '/',
            price: '3 150р',
            sale: false,
            salePrice: false,
            percents: false
        },
        {
            id: 2,
            name: 'Шляпная коробка Нежность',
            src: './images/bouquets/b2.png',
            url: '/',
            price: '4 200р',
            sale: true,
            salePrice: '6 300р',
            percents: '-19%'
        },
        {
            id: 3,
            name: 'Букет Крем-карамель',
            src: './images/bouquets/b3.png',
            url: '/',
            price: '2 150р',
            sale: false,
            salePrice: false,
            percents: false
        },
        {
            id: 4,
            name: 'Шляпная коробка Замок',
            src: './images/bouquets/b4.png',
            url: '/',
            price: '3 670р',
            sale: true,
            salePrice: '5 180р',
            percents: '-32%'
        },
    ],
    showcase_2: [
        {
            id: 5,
            name: 'Букет рубиное сияние',
            src: './images/bouquets/b1.png',
            url: '/',
            price: '3 150р',
            sale: false,
            salePrice: false,
            percents: false
        },
        {
            id: 6,
            name: 'Шляпная коробка Нежность',
            src: './images/bouquets/b2.png',
            url: '/',
            price: '4 200р',
            sale: true,
            salePrice: '6 300р',
            percents: '-19%'
        },
        {
            id: 7,
            name: 'Букет Крем-карамель',
            src: './images/bouquets/b3.png',
            url: '/',
            price: '2 150р',
            sale: false,
            salePrice: false,
            percents: false
        },
        {
            id: 8,
            name: 'Шляпная коробка Замок',
            src: './images/bouquets/b4.png',
            url: '/',
            price: '3 670р',
            sale: true,
            salePrice: '5 180р',
            percents: '-32%'
        },
    ],
};

export function goodsReducer(state = initialState) {
    return state
}