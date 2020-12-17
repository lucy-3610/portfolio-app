import React from 'react';

import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/splide/dist/css/themes/splide-default.min.css';

import phone from './../Portfolio-Images/Contact/porfolio\ icons-05.png';
import email from './../Portfolio-Images/Contact/porfolio\ icons-07.png';

class PortfolioSlider extends React.Component {
    constructor(props) {
        super(props);

        this.primaryRef = React.createRef();
        this.secondaryRef = React.createRef();
    }

    componentDidMount() {
        // Set the sync target right after the component is mounted.
        this.primaryRef.current.sync(this.secondaryRef.current.splide);
    }

    render() {
        const primaryOptions = {
            type: 'loop',
            width: 800,
            perPage: 2,
            perMove: 1,
            gap: '1rem',
            pagination: false,
        };

        const secondaryOptions = {
            type: 'slide',
            rewind: true,
            width: 800,
            gap: '1rem',
            pagination: false,
            fixedWidth: 110,
            fixedHeight: 70,
            cover: true,
            focus: 'center',
            isNavigation: true,
            updateOnMove: true,
        };

        return (
            <div>
                <Splide options={primaryOptions} ref={this.primaryRef}>
                    <SplideSlide>
                        <img src={phone} alt="Image 1" />
                    </SplideSlide>
                    <SplideSlide>
                        <img src={email} alt="Image 2" />
                    </SplideSlide>
                </Splide>

                <Splide options={secondaryOptions} ref={this.secondaryRef}>
                    <SplideSlide>
                        <img src={email} alt="Image 1" />
                    </SplideSlide>
                    <SplideSlide>
                        <img src={phone} alt="Image 2" />
                    </SplideSlide>
                </Splide>
            </div>
        );
    }
}

export default PortfolioSlider;