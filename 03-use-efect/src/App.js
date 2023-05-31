import logo from './logo.svg';
import './App.css';
import {PruebasComponent} from './components/PruebasComponent'
import { AjaxComponent } from './components/AjaxComponent';

function App() {
  return (
    <div classNameName="App">
      <header classNameName="App-header">
        <img src={logo} classNameName="App-logo" alt="logo" />
        <PruebasComponent></PruebasComponent>
        <AjaxComponent/>
    
       
      </header>
    </div>
  );
}

export default App;
