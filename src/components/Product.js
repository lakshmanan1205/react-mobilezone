import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
function Product(probs) {
  const { id, title, img, price, company, info, inCart } = probs.product;

  const clickHandlerDetils = () => {
    return (
      console.log(`value of id : ${id}`),
      console.log(`temp is ${(id, title, img, price, info, inCart)}}`),
      console.log(`to app- product-id ${id}`)
    );
  };

  return (
    <>
      <ProductWrapper className="col-9 col-md-6 col-lg-3 mx-auto">
        <div className="card">
          <div
            className="img-container p-5"
            onClick={() => {
              console.log("clickhandler");
            }}
          >
            <Link to="/details">
              <img src={img} alt="productImage" className="card-img-top" />
            </Link>
            <button
              className="cart-btn"
              disabled={inCart ? true : false}
              onClick={() => {
                console.log("clickHandlerCart");
              }}
            >
              {inCart ? (
                <p className="text-capitalize mb-0 p-0" disabled>
                  in cart
                </p>
              ) : (
                <i className="fas fa-cart-plus"></i>
              )}
            </button>
          </div>
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="text-blue font-italic mb-0">
              <span className="ms-5">$</span>
              {price}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    </>
  );
}

export default Product;
Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};
const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 0.5s linear;
  }
  .card-footer {
    border-top: transparent;
    background: transparent;
    transition: all 0.5s linear;
  }
  &: hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      border: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 0.5s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .cart-btn {
    position: absolute !important;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    color: var(--mainWhite);
    border: none;
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 0.5s linear;
  }
  .img-container:hover .cart-btn {
    transform: translate(0%, 0%);
  }
  .cart-btn:hover {
    color: var(--mainBlue);
    cursor: poinetr;
  }
`;
