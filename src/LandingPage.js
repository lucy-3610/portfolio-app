import React from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header';

class LandingPage extends React.Component {
    render() {
        return (
            <div class="landing-page">
                <Header />
                <div>
                    <h2>Hi, I'm</h2>
                    <h1>Lucy Swett</h1>
                    <h3>Design &amp; Marketing</h3>
                    <p>Motivated young professional seeking to empower people through technology.</p>
                    <Link to="/portfolio">PORTFOLIO</Link>
                </div>
            </div>
        );

    }
}

export default LandingPage;