import React from "react";
import imagem from "../assets/img/beautynoticias.svg";
import ListaCategorias from "../componentes/ListaCategorias";
import ListaPost from "../componentes/ListaPost";

const Home = () => {
  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">
          Beauty Tips
          <img className="imagem-titulo" src={imagem} alt="Imagem Beauty" />
        </h2>
      </div>
      <ListaCategorias/>
      <ListaPost url={"/posts"} />
    </main>
  );
};

export default Home;
