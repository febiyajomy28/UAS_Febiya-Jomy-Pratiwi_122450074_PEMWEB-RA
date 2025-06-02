import { createContext, useContext, useReducer } from "react";

const CafeContext = createContext();

const initialState = {
  menus: [],
  customers: [],
};

function cafeReducer(state, action) {
  switch (action.type) {
    case "SET_MENUS":
      return { ...state, menus: action.payload };
    case "SET_CUSTOMERS":
      return { ...state, customers: action.payload };
    default:
      return state;
  }
}

export function CafeProvider({ children }) {
  const [state, dispatch] = useReducer(cafeReducer, initialState);
  return (
    <CafeContext.Provider value={{ state, dispatch }}>
      {children}
    </CafeContext.Provider>
  );
}

export const useCafe = () => useContext(CafeContext);
