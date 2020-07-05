import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';

const ImageCarousel = ({images}) => {
    const displayImages = () => (
        images.map((image, index) =>
            <div key={index}>
                <img src={image} alt={index}/>
            </div>)
    );
    return (
        <Carousel>
            {displayImages()}
        </Carousel>
    )
};

export default ImageCarousel;