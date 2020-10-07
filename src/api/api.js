const axios = require('axios');

const instance = axios.create({
    baseURL: ' http://localhost:3004/'
});

const getter = (url) => {
    return instance.get('/' + url)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        })
};

export const goodsApi = {
    get(url = 'allItems') {
        return getter(url)
    }
};
export const bannersApi = {
    get() {
        const url = 'banners';
        return getter(url)
    }
};
