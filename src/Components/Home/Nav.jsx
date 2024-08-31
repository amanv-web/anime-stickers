import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
function nav() {
const item = useSelector((state) => state.cart)
  return (
    <div className="bg-primary flex items-center justify-around gap-20">
      <div className=" flex items-center ">
        <img
          className="w-20 bg-blend-color-burn"
          src="https://clipart-library.com/images_k/anime-gif-transparent-background/anime-gif-transparent-background-2.png"
          alt="sdf"
        />
        <h1 className=" font-extrabold text-primary-quaternary sm:text-4xl text-2xl">
          Anime Nexus
        </h1>
      </div>
      <div  >
        <Link className="flex ">
          <NavLink to="/" className={`content-center`}>
            <i className="fa-solid fa-house text-xl m-6 text-primary-quaternary "></i>
          </NavLink>
          <NavLink to="/Cart" className={`content-center`}> 
          <p className="absolute  ml-5 -mt-4 shadow-xl text-xl font-bold text-white"> {item.length} </p>
            <i className="fa-solid fa-cart-shopping text-xl text-primary-quaternary "> </i>
          </NavLink>
        </Link>
      </div>
    </div>
  );
}

export default nav;
