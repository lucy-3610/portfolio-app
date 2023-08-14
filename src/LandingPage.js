import React from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header';

class LandingPage extends React.Component {
    render() {
        return (
            <div className="landing-page">
                <div className="lp-bg" style={{ opacity: "60%" }}></div>
                <Header />

                <div className="container">
                    <div className="row">
                        <div className="col-auto">
                            <h2>Hi, I'm</h2>
                            <h1>Lucy Swett</h1>
                            <h3>Web Developer</h3>
                            <p>Motivated young professional seeking to empower people through technology.</p>
                            <Link id="portfolio-link" to="/portfolio">PORTFOLIO</Link>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

export default LandingPage;