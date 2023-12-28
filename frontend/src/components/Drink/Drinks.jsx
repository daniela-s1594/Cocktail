import { useEffect, useState } from "react";
import axios from "axios";
import "./drink.css";

const baseURL =
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail";
function Drinks() {
  const [drinks, setDrinks] = useState([]);

  const getdrinks = async () => {
    try {
      const response = await axios.get(baseURL);
      return response.data;
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    getdrinks().then((data) => {
      setDrinks(data.drinks);
    });
  }, []);

  if (!drinks || drinks.length === 0)
    return <p>No se encontro ninguna bebida</p>;

  return (
    <div className="grid-container">
      <div>
        {drinks?.map((drink, index) => (
          <div className="card" key={index}>
            <h2>{drink.strDrink}</h2>
            <img src={drink.strDrinkThumb} alt={drink.strDrink} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Drinks;
