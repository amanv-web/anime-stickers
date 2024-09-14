import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
function nav() {
const item = useSelector((state) => state.cart)
  return (
    <div   className="bg-primary flex items-center sticky top-0 justify-around gap-20 	z-50">
      <div className=" flex items-center ">
        <img
          className="w-10 bg-transparent mr-4"
          src="https://static.vecteezy.com/system/resources/thumbnails/027/388/505/small/black-kitsune-fox-with-red-circle-anime-japanese-style-png.png"
          alt="sdf"
        />
        <h1 className=" font-extrabold text-primary-quaternary sm:text-2xl text-1xl">
          Anime Nexus
        </h1>
      </div>
      <div  >
        <Link className="flex ">
          <NavLink to="/" className={`content-center`}>
            <i className="fa-solid fa-house m-6 text-primary-quaternary "></i>
          </NavLink>
          <NavLink to="/Cart" className={`content-center`}> 
          <p className="absolute  ml-5 -mt-4 shadow-xl text-1xl text-pretty text-white"> {item.length} </p>
            <i className="fa-solid fa-cart-shopping text-1xl text-primary-quaternary "> </i>
          </NavLink>
        </Link>
      </div>
    </div>
  );
}

export default nav;
