import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../Redux/slice/addcart";

function Cart() {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="h-screen">
      <div className="flex justify-center mt-10">
        <h1 className="text-4xl font-bold p-4">Your Cart</h1>
      </div>
      
      {/* Items Table */}
      {products.length > 0 ? (
        <div className="overflow-x-auto flex justify-center ">
          <table className="w-3/4 border-collapse bg-white">
            <thead>
              <tr className="text-left border-b">
                <th className="p-4">Items</th>
                <th className="p-4">Quantity</th>
                <th className="p-4">Price</th>
                <th className="p-4 ">Remove</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b">
                  <td className="p-4 flex items-center">
                    <img
                      className="min-w-20 max-h-20 mr-4"
                      src={product.image}
                      alt={product.name}
                    />
                    <span>{product.name}</span>
                  </td>
                  <td className="p-4">
                    <input type="number" className="w-20 p-2 border"  defaultValue={1}
                min={1}  value={product.quantity}/>
                  </td>
                  <td className="p-4">${product.price}</td>
                  <td className="p-4">
                    <button onClick={() => dispatch(remove(product.id))}>
                      <CloseIcon />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <>
          <div className="flex justify-center p-4">
            <img
              className="w-60 bg-transparent"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2s62V8eghzbVZzEAtMBjtPSFX3wYmnOE5kg&s"
              alt="Empty cart"
            />
          </div>
          <div>
            <h1 className="text-2xl p-10 text-center font-bold">No Sticker in your cart</h1>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
