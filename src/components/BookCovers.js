import React from 'react';
import ImageSlideshow from './ImageSlideshow';
import ProjectInfo from './ProjectInfo';

import dreams1 from './../Portfolio-Images/Book-Covers/Dreams1.png';
import dreams2 from './../Portfolio-Images/Book-Covers/Dreams2.png';
import dreams3 from './../Portfolio-Images/Book-Covers/Dreams3.png';
import dreams4 from './../Portfolio-Images/Book-Covers/Dreams4.png';
import dreams5 from './../Portfolio-Images/Book-Covers/Dreams5.png';
import anne1 from './../Portfolio-Images/Book-Covers/Anne1.png';
import anne2 from './../Portfolio-Images/Book-Covers/Anne2.png';
import anne3 from './../Portfolio-Images/Book-Covers/Anne3.png';

export default class BookCovers extends React.Component {
    render() {
        let book_images = [
            {
                id: 91,
                imageName: dreams1
            },
            {
                id: 92,
                imageName: dreams2
            },
            {
                id: 93,
                imageName: dreams3
            },
            {
                id: 94,
                imageName: dreams4
            },
            {
                id: 95,
                imageName: dreams5
            },
            {
                id: 96,
                imageName: anne1
            },
            {
                id: 97,
                imageName: anne2
            },
            {
                id: 98,
                imageName: anne3
            }
        ];
        return (
            <div className="wrapper">
                <h1>Book Cover Redesigns</h1>
                <div className="content">
                    <ImageSlideshow className="slider" perPage={1} images={book_images} />
                    <ProjectInfo
                        key={9}
                        tagline={"Turn a tangled mess into a clear message"}
                        directions={"Click through the image carousel on the left to view the final products."}
                        text={["These book covers went from outdated to updated. I can do this for you too. You don’t want bad design, otherwise the customer will never pick up your product. That’s the same for these books. I created designs that fit these books.", <br />, <br />, "My process starts with brainstorming different ideas until the client and I mutually decide on an idea that we work together to perfect."]}
                    />
                </div>

            </div>
        );

    }
}