import React from "react";
import { CreContainer1, Rectangle } from "../styles/CreateItem.style";
import { Preloadermsg } from "../styles/Dashboard.style";
import ReactLoading from "react-loading";
const Preloader = () => {
  return (
    <>
      <CreContainer1>
        <Rectangle />
        <Preloadermsg>
          <ReactLoading
            type={"balls"}
            color={"green"}
            height={100}
            width={100}
          />
        </Preloadermsg>
      </CreContainer1>
    </>
  );
};

export default Preloader;
