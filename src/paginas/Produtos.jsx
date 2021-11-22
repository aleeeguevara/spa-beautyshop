import React from "react";
import hidratacao from "../assets/img/hidratacao.jpg";
import nutricao from "../assets/img/nutricao.jpg";
import reconstrucao from "../assets/img/reconstrucao.jpg";
import coloracao from "../assets/img/coloracao.jpg";
import micelar from "../assets/img/micelar.jpg";
import protetor from "../assets/img/protetor-solar.jpg";
import hidratante from "../assets/img/hidratante-facial.jpg";
import '../assets/css/produtos.css';

const Produtos = () => {
  return (
      <div className="container beauty-produtos">

        <ul className="flex lista-produtos">

          <li className="produtos flex">
          <figure className="figure">
            <p className="titulo-produtos">Kit Hidratação</p>
            <img src={hidratacao} alt="Kit hidratação"/>
            <figcaption className="figure-caption">R$100,00</figcaption>
          </figure>
          </li>
          <li className="produtos flex">
          <figure className="figure">
            <p className="titulo-produtos">Kit Nutrição</p>
            <img src={nutricao} alt="Kit nutricao"/>
            <figcaption className="figure-caption">R$100,00</figcaption>
          </figure>
          </li>
          <li className="produtos flex">
          <figure className="figure">
            <p className="titulo-produtos">Kit Reconstrução</p>
            <img src={reconstrucao} alt="Kit reconstrução"/>
            <figcaption className="figure-caption">R$100,00</figcaption>
          </figure>
          </li>
          <li className="produtos flex">
          <figure className="figure">
            <p className="titulo-produtos">Coloração</p>
            <img src={coloracao} alt="Produto coloração"/>
            <figcaption className="figure-caption">R$100,00</figcaption>
          </figure>
          </li>
          <li className="produtos flex">
          <figure className="figure">
            <p className="titulo-produtos">Agua Micelar</p>
            <img src={micelar} alt="Água micelar"/>
            <figcaption className="figure-caption">R$100,00</figcaption>
          </figure>
          </li>
          <li className="produtos flex">
          <figure className="figure">
            <p className="titulo-produtos">Filtro Solar</p>
            <img src={protetor} alt="Filtro solar"/>
            <figcaption className="figure-caption">R$100,00</figcaption>
          </figure>
          </li>
          <li className="produtos flex">
          <figure className="figure">
            <p className="titulo-produtos">Hidratante Facial</p>
            <img src={hidratante} alt="Hidratante facial"/>
            <figcaption className="figure-caption">R$100,00</figcaption>
          </figure>
          </li>
        </ul>
      </div>
  );
};

export default Produtos;