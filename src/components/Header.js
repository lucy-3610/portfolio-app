import React from 'react';
import lucy_swett_monogram from "../Portfolio-Images/Lucy_Swett_Monogram.png";
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
            <div className="header">
                <Link to={"/"}>
                <img id="monogram" alt="Lucy Swett Monogram" src={lucy_swett_monogram} />
                </Link>
                <button type="button" id="nav-button">
                    <i id="bars" className="fa fa-bars"></i>
                </button>
                {/* <button type="button" aria-haspopup="true" aria-expanded="false" data-testid="tinymenu-menubutton" class="xn7QB">
                    <svg class="_5i7vn" preserveAspectRatio="none" viewBox="0 0 17 17">
                        <line class="_1Mfpg G0Ani" x2="100%"></line>
                        <line class="ALgZb G0Ani" x2="100%"></line>
                        <line class="_7Okbn G0Ani" x2="100%"></line>
                    </svg>
                </button> */}
                <div className="desktop-nav">
                    <Link to={"portfolio"}>
                        <p>Portfolio</p>
                    </Link>
                    <Link to={"about"}>
                        <p>About</p>
                    </Link>
                    <Link to={"contact"}>
                    <p>Contact</p>
                    </Link>
                </div>
                
            </div>
        );
   
    }
}

export default Header;