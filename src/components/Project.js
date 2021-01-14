import React from 'react';
import $ from "jquery";
// import { Link } from 'react-router-dom';

class Project extends React.Component {
    componentDidMount() {
        // alert("Hi")
        // $(".project").mouseover(function () {
        //     $(this).find(".hoverable").show();
        // });

        // $(".project").mouseout(function () {
        //     $(this).find(".hoverable").hide();
        // });
    }
    render() {
        return (
            // <div class="container">
            //     <img src="img_avatar.png" alt="Avatar" class="image">
            //         <div class="overlay">
            //             <div class="text">Hello World</div>
            //         </div>
            // </div>
            //             <div class="container">
            //                 <img src="img_avatar.png" alt="Avatar" class="image" style="width:100%">
            //                     <div class="middle">
            //                         <div class="text">John Doe</div>
            //                     </div>
            // </div>
            <div className="project">
                {/* <Link to={this.props.path}> */}
                <a href={"/" + this.props.path }>
                <img className="project-img" alt={this.props.image} src={this.props.image} />
                {/* <Redirect to={"/" + this.props.title + ".js"} /> */}
                <div className="middle">
                        <div className="hoverable">{this.props.title}</div>
                        </div>
                </a>
                {/* </Link> */}
            </div>
        );

    }
}

export default Project;