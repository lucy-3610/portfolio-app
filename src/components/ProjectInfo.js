import React from 'react';

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
                    <div className="lets-talk">Let's Talk</div>
                </div>
                {/* <PortfolioSlider /> */}

            </div>
        );

    }
}

export default ProjectInfo;