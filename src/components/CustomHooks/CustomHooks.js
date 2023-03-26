import { SINGLE_PRODUCT } from '../../constant/constant'
import  { useEffect, useState } from 'react'

const CustomHooks = (id) => {

    const [singleProduct, setsingleProduct ] = useState(null);
   
    useEffect(()=>{
        fetchSingleProduct()
    },[])

async function fetchSingleProduct(){
    const data = await fetch(SINGLE_PRODUCT  + id)
    const json = await data.json()
    setsingleProduct(json)
}

  return singleProduct;
}

export default CustomHooks;
