import React from "react";

export default function Listadeprodutos({ listadeprodutos }) {
  return (
    <div className="lista-produtos">
      {listadeprodutos.map((produto, index) => (
        <div key={index} className="produto">
          <img src={produto.imagem} alt={produto.nome} />
          <h2>{produto.nome}</h2>
          <p>{produto.preco}</p>
          <p>{produto.peso}</p>
          <p>{produto.modalidade}</p>
        </div>
      ))}
    </div>
  );
}
