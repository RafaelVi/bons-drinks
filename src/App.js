import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/Contact";
import Drinks from "./components/Drinks/Drinks";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import OurTeam from "./components/OurTeam/OurTeam";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/aboutUs">
            <AboutUs/>
          </Route>
          <Route path="/ourTeam">
            <OurTeam/>
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route exact path="/drinks/*">
            <Drinks/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
