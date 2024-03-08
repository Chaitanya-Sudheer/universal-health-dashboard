import React from "react";
import Body from "./Body";
import Sidemenu from "./Sidemenu";

const Container = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-screen w-full">
      <div className="flex flex-col md:flex-row gap-4">
        <Sidemenu />
        <Body />
      </div>
    </div>
  );
};

export default Container;
