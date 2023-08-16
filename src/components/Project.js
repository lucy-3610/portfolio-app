import React from 'react';

class Project extends React.Component {
    render() {
        const {url, image, title} = this.props;
        return (
            <div className="col-lg-4 project">
                <a target="_blank" rel="noopener noreferrer" href={url}>
                    <img className="project-img" alt={image} src={image} />
                    <div className="overlay">
                        <div className="text font-weight-bold">{title}</div>
                    </div>
                </a>
            </div>
        );

    }
}

export default Project;