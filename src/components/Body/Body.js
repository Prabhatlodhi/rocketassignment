import React, { useEffect, useState } from "react";
import ProductList from "./ProductList.js/ProductList";
import { ALL_PRODUCT_API } from "../../constant/constant";
import "./Body.css";
import { Link } from "react-router-dom";

function filterData(searchText, allproduct) {
    const filterDatax = allproduct.filter((prodt) =>
    prodt?.title.toLowerCase()?.includes(searchText?.toLowerCase())
    );
  
    return filterDatax;
  }

const Body = () => {
  const [allproduct, setallProduct] = useState([]);
  const [filterproduct, setfilterProduct] = useState([]);
  const [searchText, setsearchText] = useState("");


  useEffect(() => {
    fetch_all_products();
  }, []);

  async function fetch_all_products() {
    const data = await fetch(ALL_PRODUCT_API);
    const json = await data.json();
    // console.log(json);
    setallProduct(json);
    setfilterProduct(json);
  }

if(!filterproduct) return null;
  return (
    <>
      <div className="bodyParentWrapper">
        <input type="text" value={searchText}  onChange={(e) => setsearchText(e.target.value)}/>
        <button
         onClick={() => {
            const data = filterData(searchText, allproduct);

            setsearchText("");
            setfilterProduct(data);
          }}
        
        >Search Product</button>
      </div>
      <div className="bodyWrapper">
        {filterproduct.map((prod) => {
          return <Link className="Link" key={prod.id}  to={"/individualproducts/" + prod.id } ><ProductList alldata={prod} /></Link> ;
        })}
      </div>
    </>
  );
};

export default Body;
