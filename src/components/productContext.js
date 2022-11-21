import React, { useState, useEffect } from "react";
import { storeProducts, detailProduct } from "../data";

export const productList = React.createContext();

function ProductProvider(probs) {
  let [products, setProducts] = useState([]);
  const [detailProducts, setDetailProducts] = useState(detailProduct);

  useEffect(() => {
    console.log("from effect");
    setProducts(() => {
      let tempProducts = [];
      storeProducts.forEach((item) => {
        const singleItem = { ...item };
        tempProducts = [...tempProducts, singleItem];
      });
      console.log(tempProducts);
      console.log(`temp product is  ${tempProducts}`);
      return { products: tempProducts };
    });
  }, []);

  const handleDetail = () => {
    console.log("fromhandle");
  };
  const addToCart = () => {
    console.log("fromhcartandle");
  };
  console.log(`from context ${products}`);
  return (
    <productList.Provider
      value={{ products, detailProducts, handleDetail, addToCart }}
    >
      {probs.children}
    </productList.Provider>
  );
}

export default ProductProvider;
