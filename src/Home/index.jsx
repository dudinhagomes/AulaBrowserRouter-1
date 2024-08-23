import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Listadeprodutos from '../Components/Listadeprodutos';
import '../global.css';

export default function Home() {
  const [Produtos] = useState([
    {
      nome: "Charm Prata Coração Gravável",
      categoria: "Charm",
      preco: "R$ 459,00",
      peso: "18k",
      modalidade: "Prata,Coração, Gravável",
      imagem: "https://pandorajoias.vtexassets.com/arquivos/ids/224341-800-800?v=638593386564500000&width=800&height=800&aspect=true",
    },
    {
      nome: "Charm Prata Pendente Coração da Amizade",
      categoria: "Charm",
      preco: "R$ 989,00",
      peso: "18k",
      modalidade: "Prata,Pendente,Coração da Amizade",
      imagem: "https://pandorajoias.vtexassets.com/arquivos/ids/224337-800-800?v=638593383118070000&width=800&height=800&aspect=true",
    },
    {
      nome: "Charm Prata Mini Medalhão Azul Turquesa Gravável",
      categoria: "Charm",
      preco: "R$ 989,00",
      peso: "18k",
      modalidade: "Medalhão,turquesa,Gravável",
      imagem: "https://pandorajoias.vtexassets.com/arquivos/ids/223930-800-800?v=638593219915100000&width=800&height=800&aspect=true"
    },
    {
      nome: "Charm Prata Gravável",
      categoria: "Charm",
      preco: "R$ 1.969,00",
      peso: "18k",
      modalidade: "Charm,prata,gravavel",
      imagem: "https://pandorajoias.vtexassets.com/arquivos/ids/213040-800-800?v=638507044166800000&width=800&height=800&aspect=true"
    },
    {
      nome: "Charm Prata Mochila De Viagem",
      categoria: "Charm",
      preco: "R$ 459,00",
      peso: "18k",
      modalidade: "Charm,Prata, mochila",
      imagem: "https://pandorajoias.vtexassets.com/arquivos/ids/218798-800-800?v=638543361678130000&width=800&height=800&aspect=true"
    },
  ]);

  return (
    <>
      <Header />
      <Carousel
        infiniteLoop
        useKeyboardArrows
        autoPlay
        showArrows={true}
        showStatus={false}
        showThumbs={false}
      >
        <div>
          <img src="https://pandorajoias.vtexassets.com/assets/vtex.file-manager-graphql/images/8477dea6-6705-4554-a448-54fe2a101b5d___9b25e19e2b82889ec33005157b39af1e.png" alt="Imagem 1"/>
        </div>
        <div>
          <img src="https://pandorajoias.vtexassets.com/assets/vtex.file-manager-graphql/images/af6aa2bc-2e85-423e-aea4-535790d5f3eb___c001c58b5effa0c4b00ddfaf6a971531.gif" alt="Imagem 2"/>
        </div>
      </Carousel>
      <div>
        <Listadeprodutos listadeprodutos={Produtos} />
      </div>
      <Footer />
    </>
  );
}
