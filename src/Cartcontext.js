



import React, { createContext,  useReducer } from "react";

export const Ccontext = createContext();


export const StateProvider = ({ reducer, initstate, children }) => (
  <Ccontext.Provider value={useReducer(reducer, initstate)}>
    {children}
  </Ccontext.Provider>
);



