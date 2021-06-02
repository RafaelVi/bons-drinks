import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
       <Header/>
       <Switch>
         <Route exact path ="/"><Home/></Route>
         <Route path ="/aboutUs"><h1>About Us</h1></Route>
         <Route path ="/ourTeam"><h1>Our Team</h1></Route>
         <Route path ="/contact"><h1>Contato</h1></Route>
         <Route path ="/drinks"><h1>Drinks</h1></Route>
       </Switch>
       <Footer/>
      </Router>
    </div>
  );
}

export default App;
