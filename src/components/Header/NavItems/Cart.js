 
import { useDispatch, useSelector } from "react-redux";
import ItemsInCarts from "./ItemsinCart/ItemsInCarts";
import { clearCart } from "../../../redux/CartSlice"; 


const Cart = () => {
  

const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const handleClearCart = ()=>{
    dispatch(clearCart())
   }
  return (
    <div className="checkoutitem" style={{paddingTop: 90 }} >
      <h1>Total Products - {cartItems.length} </h1>
       <button className="clearAll" onClick={()=>handleClearCart()}>Clear Cart</button>
        {
            cartItems.map((itemInsideCart)=>{
               return <ItemsInCarts singleProd={itemInsideCart}/>
            })
        }
      
       
    </div>
  )
}

export default Cart




 
