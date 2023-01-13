import React from "react";
import Higher from "../Assets/higher.png";
import Lower from "../Assets/lower.png";

function Maps() {
  return (
    <div
      id="Maps"
      className="md:px-20 lg:px-0 mb-4 max-w-screen text-[#ffffff]"
    >
      <div className="flex justify-center text-4xl lg:text-6xl">Maps</div>
      <div className="lg:flex">
        <div className="lg:w-1/2 pt-0 my-5 px-20 lg:border-r-2 lg:border-petrol-blue-border ">
          <div className=" text-md left-[33%] md:left-[42%] absolute lg:text-2xl 2xl:text-4xl 2xl:left-[17.5%] lg:left-[16.5%]">
            HIGHER CONTINENT
          </div>
          <img src={Higher} className="pt-2 xl:pt-0" alt="Higher continent" />
        </div>
        <div className="lg:w-1/2 pt-0 my-5 px-20 lg:border-r-2 lg:border-petrol-blue-border">
          <div className="text-md right-[32.5%] md:right-[42%] absolute lg:text-2xl 2xl:text-4xl 2xl:right-[17.5%] lg:right-[16.5%]">
            LOWER CONTINENT
          </div>
          <img src={Lower} className="pt-2 xl:pt-0" alt="Lower continent" />
        </div>
      </div>
    </div>
  );
}

export default Maps;
