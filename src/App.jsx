import React from "react";
import "./assets/css/base/base.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./paginas/Home";
import Sobre from "./paginas/Sobre";
import Pagina404 from "./paginas/Pagina404";
import Cabecalho from "./componentes/cabecalho";
import Entrar from "./paginas/Entrar";
import Produtos from "./paginas/Produtos";

function App() {
  return (
    <Router>
      <Cabecalho/>
      <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/sobre'>
        <Sobre />
      </Route>
      <Route>
        <Entrar path='/entrar'/>
      </Route>
      <Route>
        <Produtos path='/produtos'/>
      </Route>
      <Route>
        <Pagina404/>
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
