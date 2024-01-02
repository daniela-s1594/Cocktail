import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Drinks from "./components/Drink/Drinks";
import Details from "./components/details/Details";
import Header from "./layout/header/header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Drinks />} />
        <Route path="/drink/:IdDrink" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
