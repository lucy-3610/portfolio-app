import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Portfolio from './Portfolio';
import LandingPage from './LandingPage';
import ProjectInfo from './components/ProjectInfo';
import About from './components/About';
import './App.css';
import Contact from './components/Contact';
import ImageSlideshow from './components/ImageSlideshow';
import Header from './components/Header';
import Footer from './components/Footer';
import TotL from './components/TotL';

import coe22 from './Portfolio-Images/Projects/COE22.jpg';
import pbts from './Portfolio-Images/Projects/PBTS.png';
import purl from './Portfolio-Images/Projects/Purl.jpg';
import accountability_counsel from './Portfolio-Images/Projects/Accountability_Counsel.jpg';
import ecc from './Portfolio-Images/Projects/ECC.jpg';
import cardhub from './Portfolio-Images/Projects/Cardhub.png';
import totl from './Portfolio-Images/Projects/TotL.jpg';
import dreams from './Portfolio-Images/Projects/Dreams.png';

import PortfolioSlider from './components/PortfolioSlider';

function App() {
  
  let totl_images = [
    {
      id: 7,
      imageName: cardhub
    },
    {
      id: 8,
      imageName: totl
    },
    {
      id: 9,
      imageName: dreams
    },
    // {
    //   id: 1,
    //   imageName: jpl
    // },
    {
      id: 2,
      imageName: coe22
    },
    {
      id: 3,
      imageName: pbts
    },
    {
      id: 4,
      imageName: purl
    },
    {
      id: 5,
      imageName: accountability_counsel
    },
    {
      id: 6,
      imageName: ecc
    }
  ]

  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          {/* <Redirect strict from="/one/" to="/home" /> */}
          <Route path="/portfolio" component={Portfolio} />
          <Route
            path='/jpl'
            render={(props) => (
              <ProjectInfo project={"The Jacksonville Public Library"} />
            )}
          />
          <Route
            path='/coe22'
            render={(props) => (
              <ProjectInfo project={"The Church of Eleven22"}

              />
            )}
          />
          <Route
            path='/purl'
            render={(props) => (
              <ProjectInfo project={"Purl Adoption"} />
            )}
          />
          <Route
            path='/pbts'
            render={(props) => (
              <div>
                <ProjectInfo project={"Players by the Sea"} /></div>

            )}
          />
          <Route
            path='/accountability-counsel'
            render={(props) => (
              <ProjectInfo project={"Accountability Counsel"} />
            )}
          />
          <Route
            path='/ecc'
            render={(props) => (
              <ProjectInfo project={"Elaine Clark Center"} />
            )}
          />
          <Route
            path='/cardhub'
            render={(props) => (
              <ProjectInfo project={"Cardhub"}
              />
            )}
          />
          <Route
            path='/totl'
            render={(props) => (
              <div>
                <Header />
                <TotL />
                <PortfolioSlider images={totl_images} />
                <Footer />
              </div>

            )}
          />
          <Route
            path='/book-covers'
            render={(props) => (
              <ProjectInfo project={"Book Cover Redesigns"}
                tagline={"Turn a tangled mess into a clear message"}
                text={["These book covers went from outdated to updated. I can do this for you too. You don’t want bad design, otherwise the customer will never pick up your product. That’s the same for these books. I created designs that fit these books.", <br />, <br />, "My process starts with brainstorming different ideas until the client and I mutually decide on an idea that we work together to perfect."]}

              />
            )}
          />
          <Route path="/about" component={About}>
          </Route>
          <Route path="/contact" component={Contact}>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
