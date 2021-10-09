import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import PaginaInicio from './Pages/PaginaInicio';
import PaginaRegistro from './Pages/PaginaRegistro';
import PaginaCatalogo from './Pages/PaginaCatalogo';
import PaginaEquipos from './Pages/PaginaEquipos';
import PaginaPortada from './Pages/PaginaPortada';
import PaginaFuego from './Pages/PaginasTipo/PaginaFuego'
import PaginaDragon from './Pages/PaginasTipo/PaginaDragon';
import PaginaElectrico from './Pages/PaginasTipo/PaginaElectrico';
import PaginaTierra from './Pages/PaginasTipo/PaginaTierra';
import PaginaHielo from './Pages/PaginasTipo/PaginaHielo';
import PaginaPsiquico from './Pages/PaginasTipo/PaginaPsiquico';
import PaginaAgua from './Pages/PaginasTipo/PaginaAgua';
import PaginaLucha from './Pages/PaginasTipo/PaginaLucha';
import PaginaVolador from './Pages/PaginasTipo/PaginaVolador';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PaginaInicio} />
        <Route exact path="/registro" component={PaginaRegistro} />
        <Route exact path="/catalogo" component={PaginaCatalogo} />
        <Route exact path="/equipos" component={PaginaEquipos} />
        <Route exact path="/portada" component={PaginaPortada} />
        <Route exact path="/portada/fuego" component={PaginaFuego} />
        <Route exact path="/portada/dragon" component={PaginaDragon} />
        <Route exact path="/portada/electrico" component={PaginaElectrico} />
        <Route exact path="/portada/tierra" component={PaginaTierra} />
        <Route exact path="/portada/hielo" component={PaginaHielo} />
        <Route exact path="/portada/psiquico" component={PaginaPsiquico} />
        <Route exact path="/portada/agua" component={PaginaAgua} />
        <Route exact path="/portada/lucha" component={PaginaLucha} />
        <Route exact path="/portada/volador" component={PaginaVolador} />

      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
