import React from "react";
import '../assets/css/componentes/entrar.css';

const Entrar = () => {
  return (
    <section className="form-section">
      <form className="form">
        <label htmlFor="login">Login</label>
        <input className="form-input" id="login" type="email" />
        <label htmlFor="senha">Senha</label>
        <input className="form-input" id="senha" type="password" />
        <input className="form-input--entrar" type="button" value="Entrar" />
      </form>
    </section>
  );
};

export default Entrar;
