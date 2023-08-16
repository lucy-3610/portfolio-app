import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
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

import jpl from './Portfolio-Images/Projects/JPL_Blog.png';
import pbts from './Portfolio-Images/Projects/PBTS.png';

import PortfolioSlider from './components/PortfolioSlider';
import BookCovers from './components/BookCovers';
// import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  
  // let totl_images = [{ id: 7, imageName: cardhub, link: "/cardhub", alt: "Cardhub App" }, { id: 8, imageName: totl, link: "/totl", alt: "Tea on the Loose Packaging" }, { id: 9, imageName: dreams, link: "/book-covers", alt: "Interpretation of Dreams Book Cover" }, { id: 1, imageName: jpl, link: "/jpl", alt: "Jacksonville Public Library Social Media" }, { id: 2, imageName: coe22, link: "/coe22", alt: "Church of Eleven22 Social Media" }, { id: 3, imageName: pbts, link: "/pbts", alt: "Players by the Sea Website" }, { id: 4, imageName: purl, link: "/purl", alt: "Purl Adoption Advisory Profile Book" }, { id: 5, imageName: accountability_counsel, link: "/accountability-counsel", alt: "Accountability Counsel Annual Report" }, { id: 6, imageName: ecc, link: "/ecc", alt: "Elaine Clark Center Brochure" }];
  // let book_images = [{ id: 98, imageName: totl }, { id: 99, imageName: dreams }, { id: 91, imageName: jpl }, { id: 92, imageName: coe22 }, { id: 93, imageName: pbts }, { id: 94, imageName: purl }, { id: 95, imageName: accountability_counsel }, { id: 96, imageName: ecc }, { id: 97, imageName: cardhub }];


  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          {/* <Redirect from="/portfolio-app" to="/" /> */}
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
                {/* <PortfolioSlider images={totl_images} /> */}
                <Footer />
              </div>

            )}
          />
          <Route
            path='/book-covers'
            render={(props) => (
              <div>
                <Header />
                <BookCovers />
                {/* <PortfolioSlider images={book_images} /> */}
                <Footer />
              </div>
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
