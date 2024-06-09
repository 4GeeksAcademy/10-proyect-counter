import React from "react";
import Counter from "./Counter.jsx"
import ManualCounter from "./ManualCounter.jsx"

//create your first component
const Home = () => {
 
  return (
    <>
     <ManualCounter />

      <Counter/>

    </>
  );
};

export default Home;