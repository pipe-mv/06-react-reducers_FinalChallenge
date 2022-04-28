import { createContext, useEffect, useReducer, useState } from "react";
import { TYPES } from "../actions/92_crudActions";
import { helpHttp } from "../helpers/92_helpHttp";
import { crudInitialState, crudReducer } from "../reducers/92_crudReducer";

const CrudContext = createContext();

const CrudProvider = ({ children }) => {
  //   const [db, setDb] = useState(null);
  const [state, dispatch] = useReducer(crudReducer, crudInitialState);
  const { db } = state;
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = "http://localhost:5000/santos";

  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {
        //   console.log(res);
        if (!res.err) {
          // setDb(res);
          dispatch({type:TYPES.READ_ALL_DATA, payload: res})
          setError(null);
        } else {
          // setDb(null);
          dispatch({type:TYPES.NO_DATA})
          setError(res);
        }

        setLoading(false);
      });
  }, [url]);

  const createData = (data) => {
    console.log(data);
    data.id = Date.now();
    // console.log(data);
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.post(url, options).then((res) => {
      console.log(res);
      if (!res.err) {
        // setDb([...db, res]);
        dispatch({type:TYPES.CREATE_DATA, payload: res})
      } else {
        setError(res);
      }
    });
  };

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;
    // console.log(endpoint);

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.put(endpoint, options).then((res) => {
      //console.log(res);
      if (!res.err) {
        //let newData = db.map((el) => (el.id === data.id ? data : el));
        //setDb(newData)
        dispatch({ type: TYPES.UPDATE_DATA, payload: data });
      } else {
        setError(res);
      }
    });
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id ${id}?`
    );

    if (isDelete) {
      let endpoint = `${url}/${id}`;
      let options = {
        headers: { "content-type": "application/json" },
      };

      api.del(endpoint, options).then((res) => {
        //console.log(res);
        if (!res.err) {
          //let newData = db.filter((el) => el.id !== id);
          //setDb(newData);
          dispatch({ type: TYPES.DELETE_DATA, payload: id });
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
  };

  const data = {
    db,
    error,
    loading,
    createData,
    dataToEdit,
    setDataToEdit,
    updateData,
    deleteData,
  };
  return <CrudContext.Provider value={data}>{children}</CrudContext.Provider>;
};

export { CrudProvider };
export default CrudContext;
