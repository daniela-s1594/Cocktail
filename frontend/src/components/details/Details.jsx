import { useEffect, useState } from "react";
import axios from "axios";
import "./Details.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const baseURL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`;

function Details() {
  const [IdDrink, setIdDrink] = useState();

  const getdrink = async () => {
    try {
      const response = await axios.get(`${baseURL}11006`);
      return response.data;
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    getdrink().then((data) => {
      // Asegúrate de que 'drinks' exista en los datos devueltos por la API
      if (data && data.drinks) {
        setIdDrink(data.drinks);
      }
    });
  }, []);

  return (
    <div className="container">
      <div className="container-card">
        {IdDrink?.map((drink, index) => (
          <div className="card" key={index}>
            <div className="img">
              <img src={drink.strDrinkThumb} alt={drink.strDrink} />
            </div>
            <div className="description">
              <h2>{drink.strDrink}</h2>
              <p>{drink.strTags}</p>
              <p>{drink.strCategory}</p>
              <p>{drink.strAlcoholic}</p>
              <p>{drink.strGlass}</p>
              <p>{drink.strInstructions}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Details;
