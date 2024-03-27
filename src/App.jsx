import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Product from "./components/Product";
import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/products" element={<Product />}>
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
