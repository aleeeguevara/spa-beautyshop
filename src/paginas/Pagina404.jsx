import React from 'react';
import '../assets/css/404.css';
import imagem from '../assets/img/pagina404.png';

const Pagina404 = () => {
    return(
        <main className="container felx flex--centro flex--coluna">
            <p className= "naoencontrado-texto">
                Ops, essa página não existe!
            </p>
            <img className="pagina-imagem" src={imagem} alt="ilustação beauty" />
        </main>
    )
}

export default Pagina404;