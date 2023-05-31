import logo from './logo.svg';
import './App.css';
import { FormularioComponent } from './components/FormularioComponent';

function App() {
  return (
    <div classNameName="App">
      <header classNameName="App-header">
        <img src={logo} classNameName="App-logo" alt="logo" />
      <FormularioComponent/> 
      </header>
    </div>
  );
}

export default App;
