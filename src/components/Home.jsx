import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h5>This is Home .</h5>
      <Link to="/products">Products</Link>
    </>
  );
};

export default Home;
