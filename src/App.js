import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import PaginaInicio from './Pages/PaginaInicio';
import PaginaRegistro from './Pages/PaginaRegistro';
import PaginaCatalogo from './Pages/PaginaCatalogo';
import PaginaEquipos from './Pages/PaginaEquipos';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PaginaInicio} />
        <Route exact path="/registro" component={PaginaRegistro} />
        <Route exact path="/catalogo" component={PaginaCatalogo} />
        <Route exact path="/equipos" component={PaginaEquipos} />
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
