import { useEffect, useState } from "react";
import axios from "axios";
import "./drink.css";
import { Paginator } from "primereact/paginator";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const baseURL =
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail";

function Drinks() {
  const [drinks, setDrinks] = useState([]);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [currentItems, setCurrentItems] = useState([]);

  const getdrinks = async () => {
    try {
      const response = await axios.get(
        `${baseURL}&start=${first}&limit=${rows}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const calculateRange = (currentPage, itemsPerPage) => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return { start, end };
  };

  const getCurrentItems = (allItems, range) => {
    return allItems.slice(range.start, range.end);
  };

  useEffect(() => {
    const range = calculateRange(currentPage, itemsPerPage);
    const items = getCurrentItems(drinks, range);
    setCurrentItems(items);
  }, [currentPage, itemsPerPage]);

  useEffect(() => {
    getdrinks().then((data) => {
      setDrinks(data.drinks);
      const range = calculateRange(currentPage, itemsPerPage);
      const items = getCurrentItems(data.drinks, range);
      setCurrentItems(items);
    });
  }, [first, rows]);

  if (!drinks || drinks.length === 0)
    return <p>No se encontro ninguna bebida</p>;

  const onPageChange = (event) => {
    setFirst(event.first);
  };

  return (
    <div className="container">
      <div className="grid-container">
        {currentItems?.map((drink, index) => (
          <div className="card" key={index}>
            <div className="h2">
              <h2>{drink.strDrink}</h2>
            </div>
            <div className="img">
              <img src={drink.strDrinkThumb} alt={drink.strDrink} />
            </div>
          </div>
        ))}
      </div>
      <Paginator
        first={first}
        rows={rows}
        totalRecords={120}
        rowsPerPageOptions={[10, 20, 30]}
        onPageChange={onPageChange}
      />
    </div>
  );
}
export default Drinks;
