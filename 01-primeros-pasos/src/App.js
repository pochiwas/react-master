import logo from './logo.svg';
import './App.css';
import MiComponente from './components/mi-componente/mi-componente';
import { SegundoComponente } from './components/SegundoComponente/SegundoComponente';
import {TercerComponente} from './components/TercerComponente/TercerComponente'
import {Eventos} from './components/eventos/Eventos'
function App() {
  return (
    <div classNameName="App">
      <header classNameName="App-header">
        <img src={logo} classNameName="App-logo" alt="logo" />
        <p>
          Comenzando master en react.
        </p>

        <div classNameName='componentes'>
          
        <TercerComponente nombre="Elias" apellido="Yanez"/>
        <Eventos/>
        <MiComponente/>
        <SegundoComponente/>
        </div>
      </header>
      
    </div>
  );
}

export default App;
