import React, {useEffect, useState} from "react";

const Gallery = ({item,}) => {
    const [mainImage, setMainImage] = useState('');
    const imgArr = item.gallery;
    useEffect(() => {
        setMainImage(item.src)
    }, [item.src]);
    const changeImage = (e) => {
        const imgSrc = e.target.getAttribute('data-src');
        setMainImage(imgSrc)
    };
    const SideImage = ({src}) => {
        const isActive = src === mainImage;
        return (
            <div
                onClick={changeImage}
                data-src={src}
                className={'flower__sideImage flower__sideImage_isOpen_' + isActive}
                style={{backgroundImage: `url(${src})`}}
            />
        )
    };
    return (
        <div className="flower__gallery">
            <div className="flower__sideImagesWrapper">
                <SideImage src={item.src}/>
                {
                    imgArr.map((src, i) => {
                        return <SideImage key={i} src={src}/>
                    })
                }
            </div>
            <div className="flower__mainImageWrapper">
                <div style={{backgroundImage: "url(" + mainImage + ")"}} className={'flower__image'}/>
            </div>
        </div>
    )
};
export default Gallery
