import React from "react";
import "./ProductList.css";

const ProductList = ({ alldata }) => {
  return (
    <div className="productCard" >
      <div className="productImage">
        <div>
        <img src={alldata.image} alt="" />
        </div>
        <div className="ratingList">
          <ul className="ProductRating">
            <li><b>{alldata.rating.rate}</b> stars</li>
            <li>Total Rating {alldata.rating.count}</li>
          </ul>
        </div>
      </div>
      <div>
      
        <h4>{ alldata.title.length>22 ? alldata.title.split(" ").slice(0, 9).join(" ") + "..." :  alldata.title } </h4>
        <span> {alldata.price} $</span>
        <p>{ alldata.description.length>19 ? alldata.description.split(" ").slice(0, 13).join(" ") + "..." :  alldata.description }</p>
      </div>
    </div>
  );
};

export default ProductList;
