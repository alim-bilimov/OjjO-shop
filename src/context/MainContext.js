import axios from "axios";
import React, { createContext, useContext, useState } from "react";

const ProductContext = createContext();
export const UseMainContext = () => useContext(ProductContext);

const MainContext = ({ children }) => {
  const API = "http://localhost:3000/data";
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(1);
  const [value, setValues] = useState("");

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
    setCount,
    count,
    setValues,
    value,
  };
  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export default MainContext;
