import "./App.css";
import CrudApi from "./components/92_CrudApi";
import Contador from "./components/84_Contador";
import ContadorMejorado from "./components/85_Contador Mejorado";
import ShoppingCart from "./components/87_ShoppingCart";
import { CrudProvider } from "./context/93_CrudApiContext";

//Para correr la API se requiere intalar JSON Server "npm i json-server" y verificar
// en el package.json que este esté intalado mas la fake-api con su respectivo pathway!!!
//Luego corre la fake api "npm run fake-api"

function App() {
  return (
    <div>
      <h1>UseReducer</h1>
      <hr />
      <CrudProvider>
        <CrudApi />
      </CrudProvider>
      <hr />
      <ShoppingCart />
      <hr />
      <ContadorMejorado />
      <hr />
      <Contador />
    </div>
  );
}

export default App;
