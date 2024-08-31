import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-gray-300 pt-12">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between ">
         
         <div className=" ">
         <div className="w-full md:w-auto mb-4 md:mb-0 ">
            <p className="text-sm md:  ">Subscribe to our Newsletter:</p>
            <form className="flex space-x-2 ">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-700 text-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Subscribe
              </button>
            </form>
          </div>
          
          </div> 
          
          <ul className=" space-x-4 flex  md:auto md:flex md:justify-center">
            <li>
              <NavLink to="#" className="text-gray-300 hover:text-white">
                Popular Sticker
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="text-gray-300 hover:text-white">
                New Sticker{" "}
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="text-gray-300 hover:text-white">
                Best Seller{" "}
              </NavLink>
            </li>

            <li>
              <NavLink to="#" className="text-gray-300 hover:text-white">
                Contact us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="mt-4 text-sm text-gray-400 md:flex md:justify-between flex justify-center  flex-wrap item-cne">
          <p>
            © {new Date().getFullYear()} Your Anime Website. All rights
            reserved.
          </p>
          <p>Made with ❤️ by Aman-Dev</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
