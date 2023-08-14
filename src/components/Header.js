import React, { useState } from 'react';
import lucy_swett_monogram from "../Portfolio-Images/Lucy_Swett_Monogram.png";
import { Link } from 'react-router-dom';
import MobileNav from './MobileNav';
import $ from "jquery";
// import { findAllByDisplayValue } from '@testing-library/react';
// import { timers } from 'jquery';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false, setModalVisible: false
        };
    }
    componentDidMount() {
        $('.toggle').on("click", function () {
            // alert("clicked");
            $('.hamburger-1').toggleClass('cross-right');
            $('.hamburger-2').toggleClass('cross-hide');
            $('.hamburger-3').toggleClass('cross-left');
        });
        $('.second-button').on('click', function () {

            $('.animated-icon2').toggleClass('open');
        });
    }
    render() {
        // const [modalVisible, setModalVisible] = useState(false);
        // const handleOpen = () => { !this.state.setModalVisible }
        return (
            <div className="container header-container py-5">
                <div className="row justify-content-between align-items-center">
                    <div className="col-auto">
                        <Link to="/">
                            <img id="monogram" alt="Lucy Swett Monogram" src={lucy_swett_monogram} />
                        </Link>
                    </div>
                    {/* <div className="toggle">
                    <span className="hamburger hamburger-1"></span>
                    <span className="hamburger hamburger-2"></span>
                    <span className="hamburger hamburger-3"></span>
                </div> */}

                    <button className="navbar-toggler second-button d-block d-sm-none" type="button" data-toggle="collapse" data-target="#navbarSupportedContent23"
                        aria-controls="navbarSupportedContent23" aria-expanded="false" aria-label="Toggle navigation">
                        <div className="animated-icon2"><span></span><span></span><span></span><span></span></div>
                    </button>
                    {/* <button type="button" id="nav-button" onClick={() => this.setState({ setModalVisible: true })}> */}
                    {/* <button type="button" id="nav-button" onClick={() => setModalVisible(true)}>&#9776; */}
                    {/* <button type="button" id="nav-button" onClick={() => alert(this.state.setModalVisible)  }> */}
                    {/* <i id="bars" className="fa fa-bars"></i> */}
                    {/* <MobileNav modalVisible={this.state.modalVisible} setModalVisible={this.state.setModalVisible} /> */}
                    {/* </button> */}

                    <div className="desktop-nav col-auto text-uppercase font-weight-bold">
                        <Link to={"portfolio"}>
                            Portfolio
                        </Link>
                        <Link to={"about"}>
                            About
                        </Link>
                        <Link to={"contact"}>
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        );

    }
}

export default Header;