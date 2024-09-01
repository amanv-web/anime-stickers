import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector ,useDispatch } from "react-redux";
import { remove } from "../Redux/slice/addcart";

function Cart() {
  const  products  = useSelector(state => state.cart);
  const dispatch = useDispatch()
  return (
    <div className="h-screen">
      <div className="flex justify-center mt-10">
        <h1 className="text-4xl font-bold p-4">Your cart</h1>
      </div>
      {/* items */}
      {products.length > 0 ? (
        products.map((product) => (
          <table className="flex justify-center gap-48 mt-8 ">
            <tbody className="flex">
              <td>
                <img className="w-20" src={product.image} alt={product.name} />
              </td>
              <td> {product.name} </td>
            </tbody>
            <tbody className="flex gap-16 ">
              <input type="number" className="w-20 h-16" />
              <td>${product.price}</td>
              <button onClick={() => {dispatch(remove(product.id))}}>
                <CloseIcon />
              </button>
            </tbody>
          </table>
        ))
      ) : (
       
     <>
      <div className=" flex justify-center p-4">

<img className="w-96 bg-transparent" src="https://www.vhv.rs/dpng/d/521-5212497_empty-cart-hd-png-download.png" alt="" />


        </div>
     <div>
     <h1 className="text-2xl p-10 text-center font-bold">No Sticker is your cart</h1>
     </div>
     </>
      )}
    </div>
  );
}

export default Cart;
