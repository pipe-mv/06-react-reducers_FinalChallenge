import React, { useContext } from "react";
import CrudContext from "../context/93_CrudApiContext";
import CrudTableRow from "./92_CrudTableRow";

const CrudTable = () => {
  const { db: data } = useContext(CrudContext);
  return (
    <div>
      <h3>Table de Datos</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Constelación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((elem) => <CrudTableRow key={elem.id} el={elem} />)
          ) : (
            <tr>
              <td colSpan={3}>Sin Datos</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;
