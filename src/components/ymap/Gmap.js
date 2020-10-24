import React, {useState} from 'react';
import {YMaps, Map} from 'react-yandex-maps';

const YMap = () => {
    const [ymaps, setymaps] = useState({});
    const clickHandler = (e) => {
        const coords = e.get('coords');
        ymaps.geocode(coords).then(function (res) {
            var firstGeoObject = res.geoObjects.get(0);
            // console.log(firstGeoObject)
        });
        // console.log(coords)
    };
    const loadHandler = (ymaps) => {
        setymaps(ymaps)
    };
    return (
        <YMaps query={{apikey: 'd797e070-7180-427c-b514-5ed417f701da'}}>
            <Map width={'100vw'} height={'520px'} modules={['geocode']} onLoad={loadHandler} onClick={clickHandler}
                 defaultState={{center: [55.75, 37.57], zoom: 9}}/>
        </YMaps>
    )
};
export default YMap
