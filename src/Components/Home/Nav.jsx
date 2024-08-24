import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'

function nav() {

  return (
    <div className="bg-primary flex items-center justify-around gap-20">
      <div className=" flex items-center ">
        <img
          className="w-20 bg-blend-color-burn"
          src="https://clipart-library.com/images_k/anime-gif-transparent-background/anime-gif-transparent-background-2.png"
          alt="sdf"
        />
        <h1 className=" font-extrabold text-primary-quaternary text-4xl">
          Anime Nexus
        </h1>
      </div>
      <div>
        <Link>
          <NavLink to="/">
            <i className="fa-solid fa-house text-2xl m-6 text-primary-quaternary "></i>
          </NavLink>
          <NavLink to="/Cart">
            <i className="fa-solid fa-cart-shopping text-2xl text-primary-quaternary  ">    <p className="absolute top-2 right-48    rounded-full">{}</p></i>
          </NavLink>
        </Link>
      </div>
    </div>
  );
}

export default nav;
