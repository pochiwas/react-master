import { useState } from "react";
import "./App.css";
import { AgregarComponent } from "./components/Agregar/Agregar.component";
import { BusquedaComponent } from "./components/Busqueda/Busqueda.component";
import { HeaderComponent } from "./components/Header/Header.component";
import { ListadoComponent } from "./components/Listado/Listado.component";
import { NavComponent } from "./components/Navegacion/Nav.component";


function App() {

  const [listadoState, setListadoState] = useState([]);

  return (
    <div className="layout">
      <HeaderComponent/>
      <NavComponent />

      <section id="content" className="content">
        <ListadoComponent setListadoState={setListadoState} listadoState={listadoState}/>
      </section>

      <aside className="lateral">
        <BusquedaComponent />
        <AgregarComponent setListadoState={setListadoState}/>
      </aside>

      <footer className="footer">
        &copy; Máster en React - <a href="https://www.udemy.com">Udemy</a>
      </footer>
    </div>
  );
}

export default App;
