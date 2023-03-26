import React from "react";
import { useParams } from "react-router-dom";
import CustomHooks from "../../CustomHooks/CustomHooks";
import "./Individual.css";
import { additem } from "../../../redux/CartSlice";

import { useDispatch } from "react-redux";

const IndividualProducts = () => {
  const { id } = useParams();

  // console.log(id)
  const oneProduct = CustomHooks(Number(id));
  // console.log(oneProduct);

  const dispatch = useDispatch();

  const addProduct = (oneProduct)=>{
    // console.log({...item[0]})
    dispatch(additem(oneProduct))
  }

  if (!oneProduct) return null;
  return (
    <div className="singleProduct">
    
      <div>
        <img src={oneProduct?.image} alt="" />
      </div>
      <div className="rating">
      <h3>{oneProduct?.rating.rate} stars</h3>
      <h5> Total Rating {oneProduct?.rating.count}</h5>
    </div>
      <div className="textWrapper">
        <div>
          <h1>$ {oneProduct?.price}  </h1> 
        </div>
        <h2>{oneProduct?.title}</h2>
        <p>{oneProduct?.description}</p>
        <button onClick={() => addProduct(oneProduct)}>Add to Cart</button>
      </div>
      
    </div>
  );
};

export default IndividualProducts;
