import React from 'react';
import Header from './Header';

import about_img from './../Portfolio-Images/Lucy_Swett_About.jpg';


class About extends React.Component {
    render() {
        return (
            <div className="about">
                <Header />
                <div className="about-header">
                    <h1>About</h1>
                    <div className="about-buttons">
                        <a href="https://www.linkedin.com/in/lucy-swett" rel="noreferrer" target="_blank"><div className="button-style">Connect on LinkedIn</div></a>
                        <div className="button-style">View My Resume</div>
                    </div>
                </div>
                <img alt="Lucy Swett" src={about_img} />
                <p>
                    Hi, I’m Lucy. I am a graphic designer in Jacksonville, Florida. In 2019, I graduated with a BA in Computer Science and minors in Graphic Design and Chinese from Lehigh University in Bethlehem, Pennsylvania. I enjoy helping improve customer engagement with products and services through my unique combination of technical and design skills.

                    <br />
                    <br />

                    In addition, I am more than just my technical and creative skills. I love the theater. It was love at first sight when I got to hear Idina Menzel sing on Broadway. I love to travel. I love learning about myself from being around different cultures. I love to read. Books transport me to a new world or someone else’s life, and I can learn from a new perspective. I love to be creative. You can find me crocheting plastic bags together, making a scrapbook of my most recent travels, making homemade birthday cards for friends and family. These passions help me bring new ideas and techniques to my professional life.
            </p>

            </div>
        );

    }
}

export default About;