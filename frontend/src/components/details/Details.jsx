import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Details.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const baseURL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`;

const getDrink = async ({idDrink}) => {
  try {
    const response = await axios.get(`${baseURL}${idDrink}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data", error);
  }
};

function Details({idDrink}) {
  const { idDrink, setIdDrink } = useParams();
  const [drink, setDrink] = useState([]);

  useEffect(() => {
    getDrink(idDrink).then((data) => {
      if (data && data.drinks) {
        setDrink(data.drinks[0]);
      }
    });
  }, [idDrink]);

  return (
    <div className="container">
      <div className="container-card">
        {drink?.map((item, index) => (
          <div className="card" key={index}>
            <div className="img">
              <img src={item.strDrinkThumb} alt={item.strDrink} />
            </div>
            <div className="description">
              <h2>{item.strDrink}</h2>
              <p>{item.strTags}</p>
              <p>{item.strCategory}</p>
              <p>{item.strAlcoholic}</p>
              <p>{item.strGlass}</p>
              <p>{item.strInstructions}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Details;
