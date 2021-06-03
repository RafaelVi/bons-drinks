import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import PopularDrinks from "../PopularDrinks/PopularDrinks";
import SearchDrinks from "../SearchDrinks/SearchDrinks";

const Drinks = () => {
  return (
    <main>
      <h1>Drinks</h1><br/>
      <NavLink to="/drinks/pop">Drinks</NavLink>
      <NavLink to="/drinks/search">Search</NavLink>
      <Switch>
        <Route path="/drinks/pop">
          <PopularDrinks />
        </Route>
        <Route path="/drinks/search">
           <SearchDrinks/>
        </Route>
      </Switch>
    </main>
  );
};

export default Drinks;
