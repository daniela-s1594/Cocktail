import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Drinks from "./components/Drink/Drinks";
import Details from "./components/details/Details";
import Header from "./layout/header/header";

function App() {
  const [idDrink, setIdDrink] = useState(null);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" setIdDrink={setIdDrink} element={<Drinks />} />
        <Route
          path="/details:idDrink"
          IdDrink={idDrink}
          element={<Details />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
