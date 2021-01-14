import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/splide/dist/css/themes/splide-default.min.css';

// import SimpleImageSlider from "react-simple-image-slider";
// import $ from "jquery";




import phone from './../Portfolio-Images/Contact/porfolio icons-05.png';
import email from './../Portfolio-Images/Contact/porfolio icons-07.png';
import Image from './Image';

class ImageSlideshow extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         slideshowImages: "Images"
    //     };
    // }
    // static getDerivedStateFromProps(props, state) {
    //     return {
    //         slideshowImages: props.images
    //     };
    // }
    componentDidMount() {
        if(this.props.images){
            console.log(this.props.images)
            // var slideshow = this.props.images.map(function(slideshow){
            // // var projectImage = 'images/portfolio/'+projects.image;
        
            // // return <li key={projects.title}>
            // //          <img alt={projects.title} src={projectImage} />
            // //        </li>
            // })
          }
        // for(var i=0; i < this.props.images.length; i++) {
            
        // }
    }
    // componentDidMount() {
    //     alert("Hi")
    //     var slideIndex = 1;
    //     showDivs(slideIndex);

    //     $(".project").mouseover(function () {
    //         $(this).find(".hoverable").show();
    //     });

    //     $(".project").mouseout(function () {
    //         $(this).find(".hoverable").hide();
    //     });

    //     $(".w3-left").click(function (n) {
    //         showDivs(slideIndex += n);
    //     });

    //     $(".w3-right").click(function (n) {
    //         showDivs(slideIndex += n);
    //     });



    //     function plusDivs(n) {
    //         showDivs(slideIndex += n);
    //     }

    //     function showDivs(n) {
    //         var i;
    //         var x = document.getElementsByClassName("mySlides");
    //         if (n > x.length) { slideIndex = 1 }
    //         if (n < 1) { slideIndex = x.length };
    //         for (i = 0; i < x.length; i++) {
    //             x[i].style.display = "none";
    //         }
    //         x[slideIndex - 1].style.display = "block";
    //     }
    // }
    render() {
        // var arr=[this.state.images];
        console.log("you are in imageslideshow")
        // console.log(arr);
        var imageElements=[];
        // for (var i=0; i<arr.length; i++) {
        //     imageElements.push(<Image image={ this.state.images[i] } /> );
        // }
        return (
            <Splide>
                    {imageElements}
            </Splide>
        );

    }
}

export default ImageSlideshow;