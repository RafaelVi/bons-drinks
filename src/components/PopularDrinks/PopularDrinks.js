import React from "react";
import "./PopularDrinks.css";
import { getPopularDrinks } from "./../../services/api";

const PopularDrinks = () => {
  const [drinks, setDrinks] = React.useState([]);

  React.useEffect(() => {
    async function fetchApi() {
      const data = await getPopularDrinks();
      setDrinks(data);
    }
    fetchApi();
  }, []);
  return (
    <div>
      <ul className="lista">
        {drinks.slice(0, 10).map((drink) => {
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
        })}
      </ul>
    </div>
  );
};

export default PopularDrinks;
