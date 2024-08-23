import { useState } from "react";


export default function Ofertas() {
  
  const [Produtos] = useState([
    {
      nome: "Anel de Ouro Fila de Corações",
      categoria: "Anéis",
      preco: "R$989,00",
      peso: "18k",
      modalidade: "Corações,Ouro, Fila",
      imagem: "https://pandorajoias.vtexassets.com/arquivos/ids/224414-800-800?v=638593405491630000&width=800&height=800&aspect=true"
    },
    {
      nome: "Anel Tiara De Flores",
      categoria: "Anéis",
      preco: "R$1.009,00",
      peso: "18k",
      modalidade: "Tiara,Ouro, flores",
      imagem: "https://pandorajoias.vtexassets.com/arquivos/ids/219349-800-800?v=638544843540400000&width=800&height=800&aspect=true"
    },
    {
      nome: "Anel De Prata Sua Majestade Rosa",
      categoria: "Anéis",
      preco: "R$939,00",
      peso: "18k",
      modalidade: "Prata,majestade, rosa",
      imagem: "https://pandorajoias.vtexassets.com/arquivos/ids/181932-800-800?v=637292179460000000&width=800&height=800&aspect=true"
    },
    {
      nome: "Anel de Prata Pontos Brilhantes",
      categoria: "Anéis",
      preco: "R$15.889,00",
      peso: "18k",
      modalidade: "Prata,Brilahantes, pontos",
      imagem: "https://pandorajoias.vtexassets.com/arquivos/ids/181022-800-800?v=637275876107130000&width=800&height=800&aspect=true"
    },
    {
      nome: "Anel De Prata Duplo Entrelaçado",
      categoria: "Anéis",
      preco: "R$1.849,00",
      peso: "18k",
      modalidade: "Prata,Ouro, Duplo",
      imagem: "https://pandorajoias.vtexassets.com/arquivos/ids/181006-800-800?v=637275811253670000&width=800&height=800&aspect=true"
    }
  ]);

  return (
    <div>
      <Listadeprodutos listadeprodutos={Produtos} />
    </div>
  );
}
