import React, { useContext } from "react";
import Title from "../components/Title";
import { productList } from "./productContext";
import CartColumns from "../components/CartColumns";
import EmptyCart from "../components/EmptyCart";
import CartList from "../components/CartList";

function Cart() {
  const cart = useContext(productList);
  console.log(cart.checkPro);
  //cart.cartproducts.length
  {
    if (cart.cartproducts.length) {
      return (
        <>
          <Title name="your" title="cart" />
          <CartColumns />
          <CartList value={cart} />
        </>
      );
    } else {
      return (
        <>
          <EmptyCart />
        </>
      );
    }
  }
}

export default Cart;
