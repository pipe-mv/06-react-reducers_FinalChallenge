import { useContext } from "react";
import CrudContext from "../context/93_CrudApiContext";
import CrudForm from "./92_CrudForm";
import CrudTable from "./92_CrudTable";
import Loader from "./92_Loader";
import Message from "./92_Message";

//Es obligatrio correr la base de datos para poder ver la página
// Para ejecutar la base de datos db.json se necesita correr en la terminal "npm run fake-api"
// e instalar json-server

//atra ves de las funciones reductoras no se pueden ejecutar peticiones asincronas, local storage y efectos entre otros

const CrudApi = () => {

  const { loading, error, db } = useContext(CrudContext);

  return (
    <div>
      <h2>CRUD API con Reducers y Context</h2>
      <article className="grid-1-2">
        <CrudForm />
        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.statusText}: ${error.statusText}`}
            bgColor="#dc3545"
          />
        )}
        {db && <CrudTable/>}
      </article>
    </div>
  );
};

export default CrudApi;
