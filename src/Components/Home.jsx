import React from "react";
import Witcher from "../Assets/witcher.png";

function Home() {
  return (
    <div id="Home">
      <img
        className="w-screen px-20 my-8 pt-10 lg:p-24 lg:pt-12 xl:h-screen"
        src={Witcher}
        alt="The Witcher 3"
      />
    </div>
  );
}

export default Home;
