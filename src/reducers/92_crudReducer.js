import { TYPES } from "../actions/92_crudActions";

export const crudInitialState = {
  db: null,
};

export function crudReducer(state, action) {
  switch (action.type) {
    case TYPES.READ_ALL_DATA: {
      // console.log(action.payload);
      return {
        ...state,
        db: action.payload.map((data) => data),
      };
    }
    case TYPES.CREATE_DATA: {
      // console.log(action.payload);
      console.log(state);
      return {
        ...state,
        db: [...state.db, action.payload],
      };
    }
    // case TYPES.READ_ONE_DATA: {
    //     break;
    // }
    case TYPES.UPDATE_DATA: {
      //   console.log(action.payload);

      let newData = state.db.map((elem) =>
        elem.id === action.payload.id ? action.payload : elem
      );
      return {
        ...state,
        db: newData,
      };
    }
    case TYPES.DELETE_DATA: {
      let newData = state.db.filter((elem) => elem.id !== action.payload);

      return {
        ...state,
        db: newData,
      };
    }
    case TYPES.NO_DATA: {
      return crudInitialState;
    }

    default:
      return state;
  }
}
