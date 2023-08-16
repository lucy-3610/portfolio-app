import React from 'react';

import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';
import bchs from './Portfolio-Images/Projects/BCHS_cropped.png';
import buckeye from './Portfolio-Images/Projects/Buckeye_Blueprint.png';
import chemours from './Portfolio-Images/Projects/Chemours.png';
import titanium from './Portfolio-Images/Projects/Titanium_Yoga.png';
import jpl from './Portfolio-Images/Projects/JPL_Blog.png';
import pbts from './Portfolio-Images/Projects/PBTS.png';

class Portfolio extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <Project image={bchs} url={"https://www.bcwildcatsfootball.com/"} path={"bchs"} title={"Baker County Booster Club"} />
            <Project image={buckeye} url={"https://buckeyeblueprint.com/"} path={"buckeye-blueprint"} title={"Buckeye Blueprint"} />
            <Project image={chemours} url={"https://www.chemoursneighbors.com/"} path={"chemours"} title={"Chemours Neighbors"} />
            <Project image={titanium} url={"https://www.titaniumyoga.com/"} path={"titanium"} title={"Titanium Yoga"} />
            <Project image={jpl} project={"Yay"} url={"https://jaxpubliclibrary.org/blog/celebrate-literacy-week-youth-change"} path={"jpl"} title={"The Jacksonville Public Library"} />
            <Project image={pbts} url={"https://playersbythesea.org/"} path={"pbts"} title={"Players by the Sea"} />
          </div>
        </div>
        <Footer />
      </div>
    );

  }
}

export default Portfolio;