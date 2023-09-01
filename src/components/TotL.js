import React from 'react';
import ImageSlideshow from './ImageSlideshow';
import ProjectInfo from './ProjectInfo';

import totl_clip from './../Portfolio-Images/TotL/TotL-clip.mp4';
import totl_back from './../Portfolio-Images/TotL/TotL-back.jpg';
import totl_front from './../Portfolio-Images/TotL/TotL-front.jpg';
import totl_inside from './../Portfolio-Images/TotL/TotL-inside.jpg';
import totl_top from './../Portfolio-Images/TotL/TotL-top.jpg';

export default class TotL extends React.Component {
    render() {
        let totl_images = [
            {
                id: 1,
                imageName: totl_back,
                alt: "alt",
                link: "alt"
            },
            {
                id: 2,
                imageName: totl_front,
                alt: "alt",
                link: "alt"
            },
            {
                id: 3,
                imageName: totl_inside,
                alt: "alt",
                link: "alt"
            },
            {
                id: 4,
                imageName: totl_top,
                alt: "alt",
                link: "alt"
            }
        ];
        return (
            <div className="wrapper">
                <h1>Tea on the Loose Packaging</h1>
                <div className="content">
                    <div className="media-content">
                        <video width="100%" controls autoPlay>
                            <source src={totl_clip} type="video/mp4" />
                                    Your browser does not support the video tag.
                        </video>
                        <ImageSlideshow className="slider" perPage={2} images={totl_images} />
                    </div>

                    <ProjectInfo
                        key={8}
                        tagline={"From overwhelmed to empowered"}
                        directions={"Click through the image carousel on the bottom left to view the final product."}
                        text={["There are too many options to choose from on the tea isle in the grocery store. You don’t want to pay for them all to figure out which ones you like. Instead, a tea box that allows you to sample four proven health giving teas would be the perfect solution. I can work with you to narrow down your options and ideas into one strong product. I work step-by-step with the client to provide transparency to the design process. Then you will be left with a good taste of design."]}
                    />
                </div>

            </div>
        );

    }
}