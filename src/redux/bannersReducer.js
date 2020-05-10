const initialState = {
    checkoutAside: [
        {
            bg: './images/banners/1.png',
            link: '/',
            header: 'Что подарить на 8 марта матери'
        },
        {
            bg: './images/banners/2.png',
            link: '/',
            header: 'Как продлить жизнь букета'

        },
        {
            bg: './images/banners/3.png',
            link: '/',
            header: 'Почему желтые розы к разлуке'
        }
    ]
};
export default function bannersReducer(state = initialState) {
    return state
}