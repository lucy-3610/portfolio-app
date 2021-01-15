import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

export default class Image extends React.Component {
    render() {
        // var doubled = this.props.images.map((number) => console.log(number));
        return (
            <SplideSlide>
                <img style={{width: '200px'}} src={this.props.image} alt={this.props.alt} />
            </SplideSlide>
        );

    }
}