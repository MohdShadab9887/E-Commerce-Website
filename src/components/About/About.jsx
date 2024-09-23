import React from "react";
import { useProductContext } from "../Context/Context";

// import { AppContext, AppProvider, counterContext } from '/src/components/Context/Context.jsx';

function About() {
  const { isLoading, products, featureProducts } = useProductContext();

  console.log(products);
  // console.log(products );
  return <div>I am About.</div>;
}

export default About;
