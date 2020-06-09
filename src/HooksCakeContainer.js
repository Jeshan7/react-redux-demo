import React from "react";
import { useSelector } from "react-redux";

const CakeContainer = () => {
  const numofcakes = useSelector(state => state.cake.noOfCakes)
  return <div>
    <h1>CAkes - {numofcakes}</h1>
    <button>buy</button>
  </div>;
};

export default CakeContainer;