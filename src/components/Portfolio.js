import React from 'react';

import Header from './Header';
import Project from './Project';
import Footer from './Footer';
import ibwc from './../Portfolio-Images/Projects/IBWC.png';
import bchs from './../Portfolio-Images/Projects/BCHS_cropped.png';
import buckeye from './../Portfolio-Images/Projects/Buckeye_Blueprint.png';
import chemours from './../Portfolio-Images/Projects/Chemours.png';
import titanium from './../Portfolio-Images/Projects/Titanium_Yoga.png';
import jpl from './../Portfolio-Images/Projects/JPL_Blog.png';
import culliton from './../Portfolio-Images/Projects/Culliton Channel Consulting.jpg';

class Portfolio extends React.Component {
  render() {
    console.log("You are in portfolio")
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <Project image={ibwc} project={"Yay"} url={"https://www.ibwc.gov/"} path={"ibwc"} title={"International Boundary and Water Commission"} />
            <Project image={bchs} url={"https://www.bcwildcatsfootball.com/"} path={"bchs"} title={"Baker County Booster Club"} />
            <Project image={buckeye} url={"https://buckeyeblueprint.com/"} path={"buckeye"} title={"Buckeye Blueprint"} />
            <Project image={chemours} url={"https://www.chemoursneighbors.com/"} path={"chemours"} title={"Chemours Neighbors"} />
            <Project image={titanium} url={"https://www.titaniumyoga.com/"} path={"titanium"} title={"Titanium Yoga"} />
            <Project image={culliton} url={"https://cullitonchannelconsulting.com/"} path={"pbts"} title={"Culliton Channel Consulting"} />
          </div>
        </div>
        <Footer />
      </div>
    );

  }
}

export default Portfolio;