import React from "react";
import "./SearchDrinks.css";
import {getDrinksSearch, getSubtypes, getFilteredDrinks} from './../../services/api';

const SearchDrinks = () => {
  const [drinks, setDrinks] = React.useState([]);
  const [categories, setCategories] = React.useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await getDrinksSearch(event.target.drink.value);
    setDrinks(data);
  };
  const changeFilter = async (event) => {
    event.preventDefault();
    const type = event.target.value;
    const data = await getSubtypes(type);
    localStorage.setItem("type", type);
    setCategories(data);
  };
  const filterDrinks = async (event) => {
    event.preventDefault();
    let select = event.target.value;
    let subtype = select.replaceAll(" ", "_");
    const data = await getFilteredDrinks(subtype);
    setDrinks(data);
  };

  return (
    <div>
      <div className="form-input">

        <form>
          <span>Filtre Por:</span>
          <select name="filter" id="1" onChange={changeFilter}>
            <option value="" selected disabled>
              Selecione
            </option>
            <option value="c">Categoria</option>
            <option value="g">Copo</option>
            <option value="a">Alcóolico</option>
          </select>
        </form>
        <form>
          <select name="filter2" id="2" onChange={filterDrinks}>
            <option value="" selected disabled>
              Selecione
            </option>
            {categories
              ? categories.map((category) => {
                  let type = Object.keys(category)[0];
                  let index = localStorage.getItem("type");
                  return (
                    <option
                      key={category[type]}
                      id={index}
                      value={category[type]}
                    >
                      {category[type]}
                    </option>
                  );
                })
              : () => {
                  return;
                }}
          </select>
        </form>

        <form onSubmit={handleSubmit} className="search-form">
          <span>Pesquisa:</span>
          <input type="text" name="drink" id="search-drink"/>
          <button className="btn-contact btn-search" type="submit">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="5 7 47 41.59"><g id="lupa" transform="translate(0 17.835) rotate(-48)"><g id="Ellipse_1" data-name="Ellipse 1" fill="rgba(255,255,255,0)" stroke="#FFFDF8" stroke-width="2"><circle cx="12" cy="12" r="12" stroke="none"></circle><circle cx="12" cy="12" r="11" fill="none"></circle></g><line id="Line_7" data-name="Line 7" y2="12" transform="translate(12.5 23.5)" fill="none" stroke="#FFFDF8" stroke-width="3"></line></g></svg>
          </button>
        </form>
      </div>
      <ul className="lista">
        {drinks ? (
          drinks.map((drink) => {
            return (
              <div key={drink.idDrink} className="card-drinks">
                <img
                  src={drink.strDrinkThumb}
                  className="img-drinks"
                  alt="drink"
                />
                <p className="text-drinks">{drink.strDrink}</p>
              </div>
            );
          })
        ) : (
          <p>
            Não foi possível retornar um resultado da sua busca. Por favor tente
            novamente.
          </p>
        )}
      </ul>
    </div>
  );
};

export default SearchDrinks;
