import React from "react";
import Ps from "../Assets/ps.png";
import Xbox from "../Assets/xbox.png";
import Steam from "../Assets/steam.png";
import Epic from "../Assets/epic.png";
import Email from "../Assets/email.png";

function Contacts() {
  return (
    <div className="pt-10 px-14 md:px-20 lg:px-0 mb-4 max-w-screen text-[#ffffff]">
      <div className="lg:flex">
        <div className="lg:w-1/2 pt-0 my-5 lg:px-20 lg:border-r-2 lg:border-petrol-blue-border ">
          <div className=" lg:px-24 text-md text-center block items-center justify-center lg:text-2xl 2xl:text-4xl ">
            CLICK ON YOUR PLATFORM TO BUY THE GAME
            <div className="flex gap-3 pt-2 flex-col items-center justify-center">
              <a
                target={"_blank"}
                rel={"noopener noreferrer"}
                href="https://www.xbox.com/en-us/games/store/the-witcher-3-wild-hunt/br765873cqjd"
              >
                <img src={Xbox} alt="Xbox" />
              </a>
              <a
                target={"_blank"}
                rel={"noopener noreferrer"}
                href="https://store.playstation.com/en-us/product/UP4497-PPSA10407_00-00000000000000N2"
              >
                <img src={Ps} alt="Ps" />
              </a>
              <a
                target={"_blank"}
                rel={"noopener noreferrer"}
                href="https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt"
              >
                <img src={Steam} alt="Steam" />
              </a>
              <a
                target={"_blank"}
                rel={"noopener noreferrer"}
                href="https://store.epicgames.com/en-US/p/the-witcher-3-wild-hunt"
              >
                <img src={Epic} alt="Epic" />
              </a>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 pt-0 my-5 lg:px-20 lg:border-r-2 lg:border-petrol-blue-border">
          <div className="px-6 md:px-12 xl:px-24 text-md block items-center justify-center text-center lg:text-2xl 2xl:text-4xl">
            IF YOU WANT TO BE UPDATED ON FUTURE CHANGES SIGN UP FOR OUR
            NEWSLETTER
            <div className="flex mt-5 lg:mt-10 bg-[#4c5a65] rounded-6xl px-2">
              <img
                className="border-r-4 pr-2 lg:pr-4 border-[#646161] cursor-pointer border-black w-1/6  lg:h-1/2 m-2"
                src={Email}
                alt="Email"
              />
              <input
                type="text"
                className="bg-[#4c5a65] lg:p-2 xl:mt-3 outline-none border-none rounded-6xl text-lg lg:text-3xl  lg:h-16 w-11/12"
                name="searchbar"
                placeholder="Enter your email here"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
