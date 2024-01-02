import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Paginator } from "primereact/paginator";
import { TbFileText } from "react-icons/tb";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./drink.css";

const baseURL =
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail";

const getDrinks = async (first, rows) => {
  try {
    const response = await axios.get(`${baseURL}&start=${first}&limit=${rows}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data", error);
  }
};

const calculateRange = (first, itemsPerPage) => {
  const start = first;
  const end = start + itemsPerPage;
  return { start, end };
};

const getCurrentItems = (drinks, range) => {
  return drinks.slice(range.start, range.end);
};

function Drinks({ setIdDrinks }) {
  const [drinks, setDrinks] = useState([]);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(32);
  const [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    const range = calculateRange(currentPage, itemsPerPage);
    const items = getCurrentItems(drinks, range);
    setCurrentItems(items);
  }, [currentPage, itemsPerPage]);

  useEffect(() => {
    getDrinks(first, rows).then((data) => {
      setDrinks(data.drinks);
      const range = calculateRange(first, itemsPerPage);
      const items = getCurrentItems(data.drinks, range);
      setCurrentItems(items);
    });
  }, [first, rows]);

  const onPageChange = (event) => {
    setFirst(event.first);
    setCurrentPage(event.page + 1);
  };

  return (
    <div className="container">

      <div className="grid-container">
        {currentItems?.map((drink, index) => (
          <div className="card" key={index}>
            <div className="img">
              <Link
                to={`/details/${drink.idDrink}`}
                state={{ from: window.location.pathname }}
              >
                <img src={drink.strDrinkThumb} alt={drink.strDrink} />
                <div className="description">
                  <h2>{drink.strDrink}</h2>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {currentItems.length === 0 && (
        <p className="noItems">No hay más elementos para mostrar</p>
      )}
      <div className="container-paginator">
        <Paginator
          className="paginator"
          first={first}
          rows={rows}
          totalRecords={120}
          rowsPerPageOptions={[10]}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
}

export default Drinks;
