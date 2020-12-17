import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/splide/dist/css/themes/splide-default.min.css';

import SimpleImageSlider from "react-simple-image-slider";
import $ from "jquery";

import phone from './../Portfolio-Images/Contact/porfolio\ icons-05.png';
import email from './../Portfolio-Images/Contact/porfolio\ icons-07.png';

class ImageSlideshow extends React.Component {
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
        // const images = [
        //     { url: "./../Portfolio-Images/Contact/porfolio\ icons-05.png" },
        //     { url: "" },
        //     { url: "images/3.jpg" },
        //     { url: "images/4.jpg" },
        //     { url: "images/5.jpg" },
        //     { url: "images/6.jpg" },
        //     { url: "images/7.jpg" },
        // ];
        return (
            <div className="slideshow">
                <Splide>
                    <SplideSlide>
                        <img src={phone} alt="Image 1" />
                    </SplideSlide>
                    <SplideSlide>
                        <img src={email} alt="Image 2" />
                    </SplideSlide>
                </Splide>
                {/* <div className="w3-content w3-display-container">
                    <img className="mySlides" src={phone} />
                    <img className="mySlides" src={email} />
                    <img className="mySlides" src={phone} />
                    <div className="w3-center w3-display-bottommiddle" style={{width: '100%'}}>
                        <div className="w3-left" onclick={"plusDivs(-1)"}>&#10094;</div>
                        <div className="w3-left" onclick="alert(Hello)">&#10094;</div>
                        <div className="w3-right" onclick={"plusDivs(1)"}>&#10095;</div>
                        <span className="w3-badge demo w3-border" onclick="currentDiv(1)"></span>
                        <span className="w3-badge demo w3-border" onclick="currentDiv(2)"></span>
                        <span className="w3-badge demo w3-border" onclick="currentDiv(3)"></span>
                    </div>
                </div> */}
                <div>
                    {/* <SimpleImageSlider
                    width={896}
                    height={504}
                    images={images}
                /> */}
                </div>

            </div>
        );

    }
}

export default ImageSlideshow;