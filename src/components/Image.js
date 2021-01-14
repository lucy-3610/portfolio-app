import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

export default class Image extends React.Component {
    render() {
        return (
            <SplideSlide>
                <img src={this.props.image} alt={this.props.alt} />
            </SplideSlide>
        );

    }
}