import React, { useContext } from "react";
import { productList } from "./productContext";
import { Link } from "react-router-dom";
function CartTotals() {
  const cart = useContext(productList);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ms-sm-5 ms-md-auto col-sm-8 text-capitalize text-center">
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                type="button"
                onClick={() => cart.clearCart()}
              >
                clear cart
              </button>
            </Link>
            <h5>
              <span className="text-title">subtotal:</span>
              <strong>${cart.cartSubTotal} </strong>
            </h5>
            <h5>
              <span className="text-title">tax:</span>
              <strong>${cart.cartTax} </strong>
            </h5>
            <h5>
              <span className="text-title">total:</span>
              <strong>$ {cart.cartTotal}</strong>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartTotals;
