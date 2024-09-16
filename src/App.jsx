import "./Styles/App.css";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import Detail from "./Pages/Detail";
import { ToastContainer } from "react-toastify";
import UseMemo from "./Components/UseMemo";
import Layout from "./Layout/Layout";
function App() {
  return (
    <>
      {/* <UseMemo /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="*" element={<h1>Error 404 - Page not Found</h1>} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
