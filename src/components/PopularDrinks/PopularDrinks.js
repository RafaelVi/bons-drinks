import React from "react";
import Button from "../../Button/Button";

const PopularDrinks = () => {
  const [drinks, setDrinks] = React.useState([]);

  React.useEffect(() => {
    async function fetchApi(){
     const response = await (await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")).json();
    setDrinks(response.drinks);
     console.log(drinks);
     console.log(response.drinks);
    }
    fetchApi();
    
  }, []);
  return (
    <div>
      <ul className="lista">
        {drinks.slice(0,10).map((drink) => {
          return <li key={drink.idDrink}>
              <p>{drink.strDrink}</p>
              <img src={drink.strDrinkThumb} alt="drink"/>
              </li>;
        })}
      </ul>
      <Button isGreen={true} name={"Cadastrar"}/>
    </div>
  );

};

export default PopularDrinks;