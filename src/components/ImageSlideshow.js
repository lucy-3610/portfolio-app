import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

import Image from './Image';

class ImageSlideshow extends React.Component {
    constructor(props) {
        super(props);

        // this.primaryRef = React.createRef();
    }
    render() {
        const primaryOptions = {
            type: 'loop',
            width: '440px',
            perPage: `${this.props.perPage}`,
            perMove: 1,
            gap: '1rem',
            pagination: false,
        };
        console.log("you are in imageslideshow");
        const imageItems = this.props.images.map(
            value => <Image id={value.id} image={value.imageName} link={value.link} alt={value.alt} />
        );
        return (
            <Splide options={primaryOptions} className={this.props.className}>
                {imageItems}
            </Splide>
        );

    }
}

export default ImageSlideshow;