import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

import Image from './Image';


class PortfolioSlider extends React.Component {
    constructor(props) {
        super(props);

        this.primaryRef = React.createRef();
        this.secondaryRef = React.createRef();
    }

    componentDidMount() {
        // Set the sync target right after the component is mounted.
        // this.primaryRef.current.sync(this.secondaryRef.current.splide);
    }

    render() {
        const primaryOptions = {
            type: 'loop',
            fixedWidth: 200,
            height: 200,
            gap: 10,
            // rewind: true,
            cover: true,
            perMove: 1,
            pagination: false,
        };
        console.log("you are in portfolio slider");
        const imageItems = this.props.images.map(
            value => <Image key={value.id} image={value.imageName} />
        );

        return (
            // <Splide options={secondaryOptions} ref={this.secondaryRef}>
            <Splide className="portfolio-slider" options={primaryOptions}>
                {imageItems}
            </Splide>
        );
    }
}

export default PortfolioSlider;