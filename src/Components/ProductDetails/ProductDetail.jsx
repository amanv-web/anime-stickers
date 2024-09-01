import Images from "./Images";
import { Link, NavLink, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AppContext } from "../../ContextApi/ContextApi";
import { useState } from "react";
import { useDispatch, } from 'react-redux'
import { add } from "../Redux/slice/addcart";
function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(0);
  const { id } = useParams();
  const { products } = useContext(AppContext);
  const product = products.find((item) => item.id === parseInt(id));
  const [originalPrice, setOriginalPrice] = useState(product.price);
  const [updatedValue, setUpdatedValue] = useState(product.price);
  const dispatch = useDispatch();

  useEffect(() => {
    const value = (originalPrice + parseInt(size)) * quantity;
    setUpdatedValue(value);
  }, [size, quantity]); 
  return (
    <>
      <div className="flex justify-center flex-wrap gap-10 pt-16 pb-20  bg-primary-quaternary">
        <div>
          <Images />
        </div>
        <div>
          <Link>
            <NavLink to="/">
              <button className="border-2 border-primary p-2  mb-3 hover:bg-primary hover:text-primary-quaternary  sm:w-22  w-full">
                Back to all products
              </button>
            </NavLink>
          </Link>
          <h1 className="text-4xl font-bold text-primary mb-3  w-96">
            {product.name}
          </h1>
          <p className="w-96 text-sm pb-2">{product.description} </p>
          <p className="text-5xl text-primary mb-3"> $ {updatedValue} </p>
          <p className="text-red-900 line-through">$ 15</p>
          <div className="flex gap-10 mb-8 ">
            <div>
              <label htmlFor="Quantity" className="block ">
                Quantity
              </label>
              <input
                type="number"
                name="Quantity"
                className="  p-2 w-28 pl-10  "
                defaultValue={1}
                min={1}
                onChange={(e) => setQuantity(e.target.value  )}
              />
            </div>
            <div  >
              <label htmlFor="size" className="block  ">
                Select Size
              </label>
              <select
                name="Select Size"
                className="p-2 pl-10  pr-10 w-full "
                onChange={(e) => setSize(e.target.value  )}
              >
                <option value="0">4 x 4</option>
                <option value="3">5 x 5</option>
                <option value="5">6 x 6</option>
              </select>
            </div>
          </div>
          <Link>
            <NavLink to="#">
              <button 
                 onClick={()=> {
                  dispatch(add(product));
                                      }}
                                       className=" m-auto w-full  bg-cyan-700 px-5 py-2.5 text-center -medium text-white hover:bg-cyan-800  dark:hover:bg-cyan-700 text-xl  ">
                Add to cart
                <i className="fa-solid fa-cart-shopping  text-xl ml-2"></i>
              </button>
            </NavLink>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
