import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../../reducers/reducer";

export const ContextGlobal = createContext();
const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];

const initialState = {
  list: [],
  favs: lsFavs,
  theme: true,
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios(url).then((res) => {
      dispatch({ type: "GET_CHARS", payload: res.data });
    });
  }, []);
  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  return (
    <ContextGlobal.Provider value={{state , dispatch}} >
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobal = () => {
  return useContext(ContextGlobal);
};
