import Nav from "./Components/Home/Nav";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Home/Footer";
import ScrollToTop from "./Components/hook/ScrollOnTop.jsx";

function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
