import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Portfolio from './Portfolio';
import LandingPage from './LandingPage';
import ProjectInfo from './components/ProjectInfo';
import About from './components/About';
import './App.css';
import Contact from './components/Contact';

function App() {
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
              <ProjectInfo project={"Players by the Sea"} />
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
