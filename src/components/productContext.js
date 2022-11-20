import React, { useState, useEffect } from "react";
import { storeProducts, detailProduct } from "../data";

export const productList = React.createContext();

function ProductProvider(probs) {
  // let [products, setProducts] = useState([]);
  const [detailProducts, setDetailProducts] = useState(storeProducts);

  //dummy list
  const [lakshPro, setLakshPro] = useState(storeProducts);

  const lakshman = () => {
    let tempProducts = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
      console.log(tempProducts);
      return { lakshPro: tempProducts };
    });
  };
  // useEffect(() => {
  //   console.log(`from effect ${lakshPro}`);
  // setProducts(() => {
  //   let tempProducts = [];
  //   storeProducts.forEach((item) => {
  //     // const singleItem = { ...item };
  //     console.log(item);
  //     tempProducts = tempProducts.push(item);
  //     // tempProducts = [...tempProducts, singleItem];
  //     console.log(tempProducts);
  //   });
  //   return { products: storeProducts };
  // });
  // setLakshPro(() => {
  //   let lakshmanan = [];
  //   storeProducts.forEach(
  //     lakshman
  //   (element) => {
  //   lakshman.push(...element, element);
  //   console.log(element);
  // }
  //     );
  //   });
  // }, [lakshPro]);

  // setProducts(() => {
  //   return setMe;
  // });

  const handleDetail = () => {
    console.log("fromhandle");
  };
  const addToCart = () => {
    console.log("fromhcartandle");
  };
  console.log(`from context ${lakshPro}`);
  return (
    <productList.Provider
      value={{ lakshPro, detailProducts, handleDetail, addToCart }}
    >
      {probs.children}
    </productList.Provider>
  );
}

export default ProductProvider;
