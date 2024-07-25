import React from "react";
import { useData } from "./ExampleContext";
const Mumbai = () => {
  const { surprise } = useData();
  return (
    <div>
      <div>Mumbai</div>
      <p>{surprise}</p>
    </div>
  );
};

export default Mumbai;
