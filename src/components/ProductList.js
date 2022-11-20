import React, { useContext } from "react";
import Title from "./Title";
import Product from "../components/Product";
import { productList } from "../components/productContext";

function ProductList() {
  const products = useContext(productList);

  return (
    <>
      <div className="py-5">
        <div className="container">
          <Title name="our" title="products" />
          <div className="row">
            {/* <h6>{product}</h6> */}
            {products.detailProducts === undefined ? (
              <>still loading</>
            ) : (
              products.detailProducts.map((product) => {
                return <Product key={product.id} product={product} />;
              })
            )}
            {}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;
