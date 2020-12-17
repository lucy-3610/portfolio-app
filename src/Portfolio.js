import React from 'react';

import Header from './components/Header.js';
import Project from './components/Project.js';
import Footer from './components/Footer.js';
import coe22 from './Portfolio-Images/Projects/COE22.jpg';
import pbts from './Portfolio-Images/Projects/PBTS.png';
import purl from './Portfolio-Images/Projects/Purl.jpg';
import accountability_counsel from './Portfolio-Images/Projects/Accountability_Counsel.jpg';
import ecc from './Portfolio-Images/Projects/ECC.jpg';
import cardhub from './Portfolio-Images/Projects/Cardhub.png';
import totl from './Portfolio-Images/Projects/TotL.jpg';
import dreams from './Portfolio-Images/Projects/Dreams.png';

class Portfolio extends React.Component {
  render() {
    return (
        <div>
            <Header />
      <div className="projects">
        <Project image={coe22} project={"Yay"} path={"jpl"} title={"The Jacksonville Public Library"} />
        <Project image={coe22} path={"coe22"} title={"The Church of Eleven22"} />
        <Project image={pbts} path={"pbts"} title={"Players by the Sea"} />
        <Project image={purl} path={"purl"} title={"Purl Adoption"} />
        <Project image={accountability_counsel} path={"accountability-counsel"} title={"Accountability Counsel"} />
        <Project image={ecc} path={"ecc"} title={"Elaine Clark Center"} />
        <Project image={cardhub} path={"cardhub"} title={"Cardhub"} />
        <Project image={totl} path={"totl"} title={"Tea on the Loose"} />
        <Project image={dreams} path={"book-covers"} title={"Book Cover Redesigns"} />
      </div>
      <Footer />
        </div>
    );
   
    }
}

export default Portfolio;