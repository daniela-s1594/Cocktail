import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TbHome2 } from "react-icons/tb";
import "./header.css";

function Header() {
  return (
    <header>
      <nav>
        <h1>COCKTAIL CATALOG</h1>
        <Link className="link" to="/">
          <TbHome2 className="icono" />
        </Link>
        <div>
          <Link className="link" to="/">
            Home
          </Link>
        </div>
        <div>
          <Link className="link" to="/about">
            About
          </Link>
        </div>
        <div></div>
      </nav>
    </header>
  );
}

export default Header;
