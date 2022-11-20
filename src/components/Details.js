import React from "react";

import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

function Details() {
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
            <h1>{}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-10 col-md-6 mx-auto my-3 ">
            {/* <img src={} className="img-fluid" alt="product" /> */}
          </div>
          <div className="col-10 col-md-6 mx-auto my-3 text-capitalize">
            <h2>model:{}</h2>
            <h4 className="text-title text-uppercase text-muted mt-3 mb-2 ">
              made by:<span className="text-uppercase">{}</span>
            </h4>
            <h4 className="text-blue">
              <strong>
                price:
                <span>$</span>
                {}
              </strong>
            </h4>
            <p className="text-capitalize font-weight-bold mt-3 mb-0">
              some info about product
            </p>
            <p className="text-muted lead">{}</p>

            <Link to="/">
              <ButtonContainer>Back to products</ButtonContainer>
            </Link>
            <ButtonContainer
              cart
              // disabled={item.inCart ? true : false}
              onClick={() => {}}
            >
              {/* {item.inCart ? "Incart" : "add to cart"} */}
            </ButtonContainer>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
