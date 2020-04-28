// здесь хранятся различные мелкие функции, играющие роль "утилит"
const regExpPrice = (price) => {
    const regExped = price.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ')
    return regExped
};
export {regExpPrice}