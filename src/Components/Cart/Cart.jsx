import React, { useContext } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { AppContext } from "../../ContextApi/ContextApi";
function Cart() {
  const { products } = useContext(AppContext);
  return (
    <div>
      <div className="flex justify-center mt-10">
        <h1 className="text-4xl font-bold">Your cart</h1>
      </div>
      {/* items */}
      {products && products.items ? (
        products.items.map((item) => (
          <table className="flex justify-center gap-48 mt-8 ">
            <tbody className="flex">
            <td><img className="w-20" src={products.image} alt={products.name} />{" "}</td>
              <td> {products.name} </td>
            </tbody>
            <tbody className="flex gap-16 ">
              <input type="number" className="w-20 h-10" />
              <td>${products.price}</td>
              <CloseIcon />
            </tbody>
          </table>
        ))
      ) : (
        <div className="flex justify-center pt-10  pb-10">
          <img
            src="https://skoozo.com/assets/img/empty-cart.png"
            alt=""
            srcset=""
          />
        </div>
      )}
    </div>
  );
}

export default Cart;
