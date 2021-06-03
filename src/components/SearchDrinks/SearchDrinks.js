import React from "react";
import Button from "../../Button/Button";

const SearchDrinks = () => {
  const [drinks, setDrinks] = React.useState([]);
  const [categories, setCategories] = React.useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await (
      await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${event.target.drink.value}`
      )
    ).json();
    setDrinks(response.drinks);
  };
  const changeFilter = async (event) => {
    event.preventDefault();
    const type = event.target.value;

    const response = await (
      await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/list.php?${type}=list`
      )
    ).json();
    localStorage.setItem("type", type);
    setCategories(response.drinks);
  };
  const filterDrinks = async (event) => {
    event.preventDefault();
    let select = event.target.value;

    let subtype = select.replaceAll(" ", "_");
    const response = await (
      await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?${localStorage.getItem(
          "type"
        )}=${subtype}`
      )
    ).json();
    setDrinks(response.drinks);
  };

  return (
    <>
      <form>
        <select name="filter" id="1" onChange={changeFilter}>
          <option value="" selected disabled>
            Selecione
          </option>
          <option value="c">Categoria</option>
          <option value="g">Copo</option>
          <option value="a">Alcóolico</option>
        </select>
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
      <form onSubmit={handleSubmit}>
        <label htmlFor="drink">Pesquisa</label>
        <input type="text" name="drink" />
        <input type="submit" placeholder="Pesquisar" />
      </form>
      <ul className="lista">
        {drinks ? (
          drinks.slice(0, 10).map((drink) => {
            return (
              <li key={drink.idDrink}>
                <p>{drink.strDrink}</p>
                <img src={drink.strDrinkThumb} alt="drink" />
              </li>
            );
          })
        ) : (
          <p>
            Não foi possível retornar um resultado da sua busca. Por favor tente
            novamente.
          </p>
        )}
      </ul>
      <Button name={"Enviar"}/>
    </>
  );
};

export default SearchDrinks;
