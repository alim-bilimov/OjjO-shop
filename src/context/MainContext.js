import { Api } from "@mui/icons-material";
import axios from "axios";
import React, { createContext, useContext, useState } from "react";

const ProductContext = createContext();
export const UseMainContext = () => useContext(ProductContext);

const MainContext = ({ children }) => {
  const API = "http://localhost:3000/data";
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(1);
  const [value, setValues] = useState("");
  const [block, setBlock] = useState(false);
  const [oneProduct, setoneProduct] = useState({});

  async function addInputChange(product) {
    await axios.post(API, product);
  }

  async function getProduct() {
    const { data } = await axios(API);
    setProduct(data);
  }

  async function deleteProduct(id) {
    await axios.delete(`${API}/${id}`);
    getProduct();
  }

  async function getChangeProduct(id) {
    let { data } = await axios(`${API}/${id}`);
    setoneProduct(data);
  }

  async function getOneProduct(id, editProduct) {
    await axios.patch(`${API}/${id}`, editProduct);
    getProduct();
  }

  const values = {
    addInputChange,
    getProduct,
    product,
    setCount,
    count,
    setValues,
    value,
    setBlock,
    block,
    getChangeProduct,
    oneProduct,
    getOneProduct,
    deleteProduct,
  };
  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export default MainContext;
