import React from "react";
import "./ProductList.css";

const ProductList = ({ alldata }) => {
  return (
    <div className="productCard">
      <div className="productImage">
        <div>
        <img src={alldata.image} alt="" />
        </div>
        <div className="ratingList">
          <ul>
            <li>{alldata.rating.rate} stars</li>
            <li>Total Rating {alldata.rating.count}</li>
          </ul>
        </div>
      </div>
      <div>
        <h4>{alldata.title.split(" ").slice(0, 9).join(" ") + "..."} </h4>
        <span> {alldata.price} $</span>
        <p>{alldata.description.split(" ").slice(0, 12).join(" ") + "..."}</p>
      </div>
    </div>
  );
};

export default ProductList;
