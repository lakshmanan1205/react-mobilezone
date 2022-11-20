import React, { useState, useEffect } from "react";
import { storeProducts, detailProduct } from "../data";

export const productList = React.createContext();

function ProductProvider(probs) {
  let [products, setProducts] = useState([]);
  const [detailProducts, setDetailProducts] = useState(detailProduct);

  //dummy list
  const [lakshPro, setLakshPro] = useState([]);

  const lakshman = () => {
    let tempProducts = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
      console.log(tempProducts);
      return { products: tempProducts };
    });
  };
  useEffect(() => {
    console.log(`from effect ${products}`);
    setProducts(() => {
      let tempProducts = [];
      storeProducts.forEach((item) => {
        // const singleItem = { ...item };
        console.log(item);
        tempProducts = tempProducts.push(item);
        // tempProducts = [...tempProducts, singleItem];
        console.log(tempProducts);
      });
      return { products: storeProducts };
    });
  }, [products]);

  // setProducts(() => {
  //   return setMe;
  // });

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
