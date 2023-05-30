import logo from './logo.svg';
import './App.css';
import MiComponente from './components/mi-componente/mi-componente';
import { SegundoComponente } from './components/SegundoComponente/SegundoComponente';
import {TercerComponente} from './components/TercerComponente/TercerComponente'
import {Eventos} from './components/eventos/Eventos'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Comenzando master en react.
        </p>

        <div className='componentes'>
          
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
