import React from 'react'
import imagem from '../assets/img/beautynoticias.svg';

const Home = () => {
  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Beauty Tips
        <img className= "imagem-titulo" src={imagem} alt="Imagem Beauty"/>
        </h2>
      </div>
      <section className="container flex flex--centro">
      <article className="cartao post">
        <h2 className="cartao__titulo">Cronograma Capilar</h2>
        <p className="cartao__texto">O método do cronograma capilar, possibilita a identificação das fragilidades dos fios de cabelo, para então apontar a melhor maneira para tratar. E tudo orientado pela agenda pré-determinada. Para cada dia, é suprida a necessidade diversa do cabelo.</p>
      </article>
    </section>

    </main>
  )
}

export default Home
