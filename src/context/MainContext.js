import axios from "axios";
import React, { createContext, useContext } from "react";

const ProductContext = createContext();
export const UseMainContext = () => useContext(ProductContext);

const MainContext = ({ children }) => {
  const API = "http://localhost:3000/data";

  async function addInputChange(product) {
    await axios.post(API, product);
  }

  const values = {
    addInputChange,
  };
  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export default MainContext;
