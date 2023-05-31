import logo from './logo.svg';
import './App.css';
import { PrimerEstado } from './components/PrimerEstado';
import {PrimerEjercicio} from './components/PrimerEjercicio'

function App() {

  const fecha = (new Date().getFullYear())
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <h1>Estados de los componentes</h1>
      <PrimerEstado/>
      <PrimerEjercicio year={fecha}/>

      </header>
    </div>
  );
}

export default App;
