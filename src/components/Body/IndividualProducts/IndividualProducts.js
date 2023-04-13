import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CustomHooks from "../../CustomHooks/CustomHooks";
import "./Individual.css";
import { additem } from "../../../redux/CartSlice";
import { removeItem } from "../../../redux/CartSlice";

import { useDispatch } from "react-redux";

const IndividualProducts = () => {
  const [count, setcount] = useState(0)
  const { id } = useParams();

  // console.log(id)
  const oneProduct = CustomHooks(Number(id));
  // console.log(oneProduct);

  const dispatch = useDispatch();

  const addProduct = (oneProduct)=>{
    // console.log({...item[0]})
    dispatch(additem(oneProduct))
    setcount(count+1)
  }

  const removeProduct = (oneProduct)=>{
    // console.log({...item[0]})
    dispatch(removeItem(oneProduct))
   if(count > 0){
     setcount(count-1)
   }
  }

  if (!oneProduct) return null;
  return (
    <div className="singleProduct" style={{paddingTop: 120}}>
    
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
        
        <button onClick={() => addProduct(oneProduct)} >Add to Cart</button>
        <button onClick={() => removeProduct(oneProduct)} >Drop</button>
        <span>Quantity : {count}</span>
      </div>
      
    </div>
  );
};

export default IndividualProducts;
