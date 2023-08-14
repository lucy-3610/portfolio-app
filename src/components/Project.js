import React from 'react';

class Project extends React.Component {
    render() {
        return (
            <div className="col-lg-4 project">
                <a href={"/" + this.props.path}>
                    <img className="project-img" alt={this.props.image} src={this.props.image} />
                    <div className="overlay">
                        <div className="text font-weight-bold">{this.props.title}</div>
                    </div>
                </a>
            </div>
        );

    }
}

export default Project;