import React from 'react';
import { Link } from 'react-router-dom';

class ProjectInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projectDirections: "Project Directions",
            projectInfo: "Project Info",
            projectTagline: "Project Tagline"
        };
    }
    static getDerivedStateFromProps(props, state) {
        return {
            projectDirections: props.directions, projectInfo: props.text, projectTagline: props.tagline
        };
    }
    render() {
        // console.log("this is props length: " + this.props.length);
        return (
            
            <div className="project-info">
                {/* <ImageSlideshow /> */}
                <div className="project-p">
                    <div className="tagline">{this.state.projectTagline}<br /></div>
                    <p><em>{this.state.projectDirections}</em></p>
                    <p className="info">{this.state.projectInfo}</p>
                    <Link to="/contact">
                    <div className="lets-talk">Let's Talk</div>
                    </Link>
                </div>
                {/* <PortfolioSlider /> */}

            </div>
        );

    }
}

export default ProjectInfo;