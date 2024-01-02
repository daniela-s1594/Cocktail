import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "primereact/button";
import "./Details.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const baseURL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`;

function Details() {
  const { idDrink } = useParams(); // Obtiene el ID del coctel de la URL
  const [drink, setDrink] = useState(null); // Estado inicial para los detalles del coctel
  const navigate = useNavigate();
  const getDrink = async () => {
    try {
      const response = await axios.get(`${baseURL}${idDrink}`);
      console.log(idDrink);
      return response.data;
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };
  useEffect(() => {
    getDrink(idDrink).then((data) => {
      // Pasa el ID del coctel a la función getDrink
      if (data && data.drinks) {
        setDrink(data.drinks[0]); // Asume que siempre habrá al menos un coctel
      }
    });
  }, [idDrink]); // Dependencia del efecto: se ejecutará cada vez que cambie el ID del coctel

  let ingredients = [];
  if (drink) {
    ingredients = [];
    for (let i = 1; i <= 15; i++) {
      const ingredient = drink[`strIngredient${i}`];
      if (ingredient) {
        ingredients.push(ingredient);
      }
    }
  }

  // Si los detalles del coctel aún no se han cargado, muestra un mensaje de carga
  if (!drink) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="detail-container">
      <div className="detail-container-card">
        <div className="detail-card">
          <div className="detail-img">
            <img src={drink.strDrinkThumb} alt={drink.strDrink} />
          </div>
          <div className="detail-description">
            <h2>{drink.strDrink}</h2>
            <p>{drink.strTags}</p>
            <p>{drink.strCategory}</p>
            <p>{drink.strAlcoholic}</p>
            <p>{drink.strGlass}</p>
            <h4>Ingredients</h4>
            <ul>
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <h4>Instructions</h4>
            <p>{drink.strInstructions}</p>
          </div>
        </div>
      </div>
      <Button className="button" onClick={() => navigate(-1)}>
        Back
      </Button>
    </div>
  );
}

export default Details;
