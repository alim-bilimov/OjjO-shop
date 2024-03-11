import axios from "axios";
import React, { createContext, useContext, useState } from "react";

const ProductContext = createContext();
export const UseMainContext = () => useContext(ProductContext);

const MainContext = ({ children }) => {
  const API = "http://localhost:3000/data";
  const [product, setProduct] = useState([]);

  async function addInputChange(product) {
    await axios.post(API, product);
  }
  async function getProduct() {
    const { data } = await axios(API);
    setProduct(data);
  }

  const values = {
    addInputChange,
    getProduct,
    product,
  };
  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export default MainContext;
