import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Portfolio from './Portfolio';
import LandingPage from './LandingPage';
import ProjectInfo from './components/ProjectInfo';
import About from './components/About';
import './App.css';
import Contact from './components/Contact';
import ImageSlideshow from './components/ImageSlideshow';

import totl_back from './Portfolio-Images/TotL/TotL-back.jpg';
import totl_front from './Portfolio-Images/TotL/TotL-front.jpg';
import totl_inside from './Portfolio-Images/TotL/TotL-inside.jpg';
import totl_top from './Portfolio-Images/TotL/TotL-top.jpg';

function App() {
  let totl_images = [
    {
      id: 1,
      imageName: totl_back
    },
    {
      id: 2,
      imageName: totl_front
    },
    {
      id: 3,
      imageName: totl_inside
    },
    {
      id: 4,
      imageName: totl_top
    }
  ];

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
                <ProjectInfo project={"Players by the Sea"} /><ImageSlideshow images={totl_images} /></div>

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
              <ProjectInfo project={"Tea on the Loose"} />
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
