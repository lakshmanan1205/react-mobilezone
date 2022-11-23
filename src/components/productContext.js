import React, { useState, useEffect } from "react";
import { storeProducts, detailProduct } from "../data";

export const productList = React.createContext();

function ProductProvider(probs) {
  let [products, setProducts] = useState(storeProducts);
  let [cartproducts, setCartproducts] = useState(storeProducts);
  let [checkPro, setCheckPro] = useState([]);
  const [detailProducts, setDetailProducts] = useState(detailProduct);
  const [modelOpen, setModelOpen] = useState(false);
  const [modelProduct, setModelProduct] = useState(detailProducts);
  let [laksh, setLaksh] = useState(false);
  // useEffect(() => {
  //   return null;
  // }, [products]);

  // useEffect(() => {}, [detailProduct]);

  // useEffect(() => {
  //   console.log("from effect");
  //   setProducts(() => {
  //     let tempProducts = [];
  //     storeProducts.forEach((item) => {
  //       const singleItem = { ...item };
  //       tempProducts = [...tempProducts, singleItem];
  //     });
  //     console.log(tempProducts);
  //     console.log(`temp product is  ${tempProducts}`);
  //     return { products: tempProducts };
  //   });
  // }, []);
  // function lakshman(id) {
  //   return console.log(id);
  // }

  const addLaksh = (id) => {
    let tempProducts = [...products];
    const index = tempProducts.indexOf(getItem(id));
    const product = tempProducts[index];
    console.log(product);
    return [...checkPro, product];
    // return console.log(id);
  };
  const getItem = (id) => {
    const product = products.find((item) => item === id);
    console.log(id);
    return product;
  };
  const handleDetail = () => {
    console.log("fromhandle");
  };
  const addToCart = (id) => {
    console.log("fromhcartandle");
  };
  console.log(`from context ${products}`);
  return (
    <productList.Provider
      value={{
        products,
        cartproducts,
        setCartproducts,
        detailProducts,
        setDetailProducts,
        handleDetail,
        addToCart,
        modelOpen,
        setModelOpen,
        modelProduct,
        setModelProduct,
        laksh,
        setLaksh,
        addLaksh,
        checkPro,
      }}
    >
      {probs.children}
    </productList.Provider>
  );
}

export default ProductProvider;
