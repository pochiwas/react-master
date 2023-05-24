import logo from './logo.svg';
import './App.css';
import MiComponente from './components/mi-componente/mi-componente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Comenzando master en react.
        </p>
        <MiComponente/>
      </header>
      
    </div>
  );
}

export default App;
