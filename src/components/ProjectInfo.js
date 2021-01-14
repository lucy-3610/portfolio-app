import React from 'react';
import Footer from './Footer';
import Header from './Header';
import ImageSlideshow from './ImageSlideshow';
import PortfolioSlider from './PortfolioSlider';

class ProjectInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projectTitle: "Project Title",
            projectInfo: "Project Info",
            projectTagline: "Project Tagline"
        };
    }
    static getDerivedStateFromProps(props, state) {
        return {
            projectTitle: props.project, projectInfo: props.text, projectTagline: props.tagline
        };
    }
    render() {
        // console.log("this is props length: " + this.props.length);
        return (
            
            <div className="project-info">
                <Header />
                <h1>{this.state.projectTitle}</h1>
                {/* <ImageSlideshow /> */}
                <div className="project-p">
                    <div className="tagline">{this.state.projectTagline}<br /></div>
                    <p>{this.state.projectInfo}</p>
                    <div className="lets-talk">Let's Talk</div>
                </div>
                {/* <PortfolioSlider /> */}
                <Footer />

            </div>
        );

    }
}

export default ProjectInfo;