import React from "react";

const initialState = {
    allItems: [

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
        {
            id: 3,
            name: 'Букет «Крем-карамель»',
            src: './images/bouquets/b3.png',
            price: 2150,
            sale: false,
            salePrice: false,
            percents: false,
            category: 'Гортензии',
            type: 'allItems',
            composition: [
                {name: 'Лист аспидистры', id: 'aspidistra', amount: 4},
                {name: 'Альстромерия', id: 'alstromeria', amount: 6},
                {name: 'Хризантема кустовая', id: 'hrizantema', amount: 4},
                {name: 'Тюльпаны', id: 'tulpan', amount: 1},
                {name: 'Гербера', id: 'gerbera', amount: 2},
            ],
            additional: [1002, 1001, 1003, 1005, 1004, 1007, 1006, 1008,]
        },
        {
            id: 4,
            name: 'Шляпная коробка «Замок»',
            src: './images/bouquets/b4.png',
            price: '3 670р',
            sale: true,
            salePrice: '5 180р',
            percents: '-32%',
            category: 'Тюльпаны',
            type: 'allItems',
            composition: [
                {name: 'Тюльпаны', id: 'tylpan', amount: 22},
                {name: 'Альстромерия', id: 'alstromeria', amount: 6},
                {name: 'Хризантема кустовая', id: 'hrizantema', amount: 4},
                {name: 'Гербера', id: 'gerbera', amount: 2},
            ],
            additional: [1008, 1002, 1007, 1003, 1005, 1001, 1004, 1006,]
        },
        {
            id: 5,
            name: 'Букет «Деревенское утро»',
            src: './images/bouquets/b5.png',
            price: 3150,
            sale: true,
            salePrice: 3300,
            percents: '-9% ',
            category: 'Ромашки',
            type: 'allItems',
            composition: [
                {name: 'Ромашка', id: 'romashka', amount: 10},
                {name: 'Эустома сиреневая', id: 'aystomasir', amount: 4},
                {name: 'Альстромерия', id: 'alstromeria', amount: 6},
                {name: 'Хризантема кустовая', id: 'hrizantema', amount: 4},
            ],
            additional: [1002, 1008, 1007, 1006, 1003, 1005, 1001, 1004,]
        },
        {
            id: 6,
            name: 'Букет «Шик»',
            src: './images/bouquets/b6.png',
            price: 5500,
            sale: true,
            salePrice: 9300,
            percents: '-44%',
            category: 'Орхидеи',
            type: 'allItems',
            composition: [
                {name: 'Орхидея', id: 'orhideya', amount: 15},
                {name: 'Эустома сиреневая', id: 'aystomasir', amount: 4},
                {name: 'Альстромерия', id: 'alstromeria', amount: 6},
                {name: 'Хризантема кустовая', id: 'hrizantema', amount: 4},
            ],
            additional: [1002, 1008, 1007, 1006, 1003, 1005, 1001, 1004,]
        },
        {
            id: 7,
            name: 'Корзина «Ромашки»',
            src: './images/bouquets/b7.png',
            price: 8990,
            sale: true,
            salePrice: 9999,
            percents: '-20% ',
            category: 'Ромашки',
            type: 'allItems',
            composition: [
                {name: 'Ромашка', id: 'romashka', amount: 200},
            ],
            additional: [1003, 1002, 1007, 1005, 1001, 1004, 1006, 1008,]
        },
        {
            id: 8,
            name: 'Букет «Малиновый щербет»',
            src: './images/bouquets/b8.png',
            price: 6000,
            sale: true,
            salePrice: 9000,
            percents: '-28%',
            category: 'Ромашки',
            type: 'allItems',
            composition: [
                {name: 'Малина', id: 'malina', amount: 20},
            ],
            additional: [1003, 1002, 1007, 1005, 1001, 1004, 1006, 1008,]
        },
    ],
    additionalItems: [
        {
            id: 1001,
            name: 'Воздушный шар Круглый',
            src: './images/additional/1.png',
            price: 350,
            vendorCode: '19234237',
            mark: 3,
            sale: false,
            salePrice: false,
            percents: false,
            type: 'additionalItems'
        },
        {
            id: 1002,
            name: 'Корзина Доброе утро',
            src: './images/additional/2.png',
            price: 6600,
            vendorCode: '19234227',
            mark: 5,
            sale: false,
            salePrice: false,
            percents: false,
            type: 'additionalItems'
        },
        {
            id: 1003,
            name: 'Медведь плюшевый',
            src: './images/additional/3.png',
            price: 1600,
            vendorCode: '11234227',
            mark: 5,
            sale: true,
            salePrice: 2300,
            percents: '36%',
            type: 'additionalItems'
        },
        {
            id: 1004,
            name: 'Корзина Уютный вечер',
            src: './images/additional/4.png',
            price: 7780,
            vendorCode: '13234227',
            mark: 4,
            sale: true,
            salePrice: 9300,
            percents: '35%',
            type: 'additionalItems'
        },
        {
            id: 1005,
            name: 'Корзина Сладость',
            src: './images/additional/4.png',
            price: 6390,
            vendorCode: '13234227',
            mark: 3,
            sale: true,
            salePrice: 7000,
            percents: '18%',
            type: 'additionalItems'

        },
        {
            id: 1006,
            name: 'Воздушный шар Звезда',
            src: './images/additional/6.png',
            price: 350,
            vendorCode: '13034227',
            mark: 5,
            sale: false,
            salePrice: false,
            percents: false,
            type: 'additionalItems'
        },
        {
            id: 1007,
            name: 'Мыльные розы Страсть',
            src: './images/additional/7.png',
            price: 2200,
            vendorCode: '13834337',
            mark: 5,
            sale: false,
            salePrice: false,
            percents: false,
            type: 'additionalItems'
        },
        {
            id: 1008,
            name: 'Открытка ручной работы',
            src: './images/additional/8.png',
            price: 400,
            vendorCode: '13839937',
            mark: 3,
            sale: false,
            salePrice: false,
            percents: false,
            type: 'additionalItems'
        },
    ],
    showcase_1: [


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
        {
            id: 3,
            name: 'Букет «Крем-карамель»',
            src: './images/bouquets/b3.png',
            price: 2150,
            sale: false,
            salePrice: false,
            percents: false,
            category: 'Гортензии',
            type: 'allItems',
            composition: [
                {name: 'Лист аспидистры', id: 'aspidistra', amount: 4},
                {name: 'Альстромерия', id: 'alstromeria', amount: 6},
                {name: 'Хризантема кустовая', id: 'hrizantema', amount: 4},
                {name: 'Тюльпаны', id: 'tulpan', amount: 1},
                {name: 'Гербера', id: 'gerbera', amount: 2},
            ],
            additional: [1002, 1001, 1003, 1005, 1004, 1007, 1006, 1008,]
        },
        {
            id: 4,
            name: 'Шляпная коробка «Замок»',
            src: './images/bouquets/b4.png',
            price: 3670,
            sale: true,
            salePrice: 5180,
            percents: '-32%',
            category: 'Тюльпаны',
            type: 'allItems',
            composition: [
                {name: 'Тюльпаны', id: 'tylpan', amount: 22},
                {name: 'Альстромерия', id: 'alstromeria', amount: 6},
                {name: 'Хризантема кустовая', id: 'hrizantema', amount: 4},
                {name: 'Гербера', id: 'gerbera', amount: 2},
            ],
            additional: [1008, 1002, 1007, 1003, 1005, 1001, 1004, 1006,]
        },
    ],
    showcase_2: [
        {
            id: 5,
            name: 'Букет «Деревенское утро»',
            src: './images/bouquets/b5.png',
            price: 3150,
            sale: true,
            salePrice: 3300,
            percents: '-9% ',
            category: 'Ромашки',
            type: 'allItems',
            composition: [
                {name: 'Ромашка', id: 'romashka', amount: 10},
                {name: 'Эустома сиреневая', id: 'aystomasir', amount: 4},
                {name: 'Альстромерия', id: 'alstromeria', amount: 6},
                {name: 'Хризантема кустовая', id: 'hrizantema', amount: 4},
            ],
            additional: [1002, 1008, 1007, 1006, 1003, 1005, 1001, 1004,]
        },
        {
            id: 6,
            name: 'Букет «Шик»',
            src: './images/bouquets/b6.png',
            price: 5500,
            sale: true,
            salePrice: 9300,
            percents: '-44%',
            category: 'Орхидеи',
            type: 'allItems',
            composition: [
                {name: 'Орхидея', id: 'orhideya', amount: 15},
                {name: 'Эустома сиреневая', id: 'aystomasir', amount: 4},
                {name: 'Альстромерия', id: 'alstromeria', amount: 6},
                {name: 'Хризантема кустовая', id: 'hrizantema', amount: 4},
            ],
            additional: [1002, 1008, 1007, 1006, 1003, 1005, 1001, 1004,]
        },
        {
            id: 7,
            name: 'Корзина «Ромашки»',
            src: './images/bouquets/b7.png',
            price: 8990,
            sale: true,
            salePrice: 9999,
            percents: '-20% ',
            category: 'Ромашки',
            type: 'allItems',
            composition: [
                {name: 'Ромашка', id: 'romashka', amount: 200},
            ],
            additional: [1003, 1002, 1007, 1005, 1001, 1004, 1006, 1008,]
        },
        {
            id: 8,
            name: 'Букет «Малиновый щербет»',
            src: './images/bouquets/b8.png',
            price: 6000,
            sale: true,
            salePrice: 9000,
            percents: '-28%',
            category: 'Ромашки',
            type: 'allItems',
            composition: [
                {name: 'Малина', id: 'malina', amount: 20},
            ],
            additional: [1003, 1002, 1007, 1005, 1001, 1004, 1006, 1008,]
        },
    ],
};

export default function goodsReducer(state = initialState) {
    return state
}