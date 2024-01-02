import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TbHome2 } from "react-icons/tb";
import "./header.css";

function Header() {
  return (
    <header>
      <nav>
        <Link className="link" to="/">
          <TbHome2 />
        </Link>
        <div>
          <Link className="link" to="/">
            Inicio
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
