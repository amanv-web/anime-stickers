import Nav from "./Components/Home/Nav";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Home/Footer";
function App() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
