import React from "react";
import './PopularDrinks.css'

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
          return <div key={drink.idDrink} className="card-drinks">
              <img src={drink.strDrinkThumb} className="img-drinks" alt="drink"/>
              <p className="text-drinks">{drink.strDrink}</p>
              </div>;
        })}
      </ul>
    </div>
  );

};

export default PopularDrinks;