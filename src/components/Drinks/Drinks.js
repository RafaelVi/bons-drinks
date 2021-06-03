import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import PopularDrinks from "../PopularDrinks/PopularDrinks";
import SearchDrinks from "../SearchDrinks/SearchDrinks";
import './Drinks.css';

const Drinks = () => {
  return (
    <section className="animeLeft">
      <h1>Drinks</h1><br/>
      <NavLink to="/drinks/pop"  className="drinks-btn" activeClassName="activeDrinks">Drinks Populares</NavLink>
      <NavLink to="/drinks/search"  className="drinks-btn" activeClassName="activeDrinks">Pesquisar</NavLink>
      <Switch>
        <Route path="/drinks/pop">
          <PopularDrinks />
        </Route>
        <Route path="/drinks/search">
           <SearchDrinks/>
        </Route>
      </Switch>
    </section>
  );
};

export default Drinks;
