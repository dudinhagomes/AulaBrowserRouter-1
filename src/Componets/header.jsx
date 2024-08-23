import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/Produto">Produto</Link>
        <Link to="/Ofertas">Ofertas</Link>
      </nav>
    </header>
  );
}
