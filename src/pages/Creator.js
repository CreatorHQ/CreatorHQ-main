import React from "react";
import SupportModal from "../Components/SupportModal";

import f from "../assets/bojack characters/todd chavez.jpeg";
import twitter from "../assets/socials/twitter.svg";
import instagram from "../assets/socials/instagram.svg";
import yt from "../assets/socials/yt.svg";

function Creator() {
  return (
    <div className="container md:p-8 md:pl-24 md:p-2 m-2 md:m-0 mb-12">
      {/* Main container */}
      <div className="flex flex-col ">
        {/* Image and buttons */}
        <div className="flex md:flex-row flex-col items-center">
          <div className="flex items-center flex-col font-bold">
            <img
              src={f}
              alt="f"
              className="h-44 w-44 rounded-full border-2 border-black"
            />
            <p>@toddtheace</p>
          </div>
          {/* Buttons and socials */}
          <div className="flex md:mt-6 md:ml-6 flex-col w-42">
            <div>
              <SupportModal />
            </div>

            {/* Socials */}
            <div className="flex flex-row mt-6 justify-between">
              <img src={twitter} className="h-10 w-10" />
              <img src={instagram} className="h-10 w-10" />
              <img src={yt} className="h-10 w-10" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start mt-8">
          {/* Biography */}
          <p className="font-montserrat text-4xl md:text-6xl ">Todd Chavez</p>
          <p className="w-3/5 mt-4 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            pellentesque convallis felis, vitae ultricies eros. Fusce faucibus
            ante non velit scelerisque, in hendrerit est varius.
          </p>
          <div className="flex fex-row justify-between">
            <div className="mx-2 bg-white border-2 border-black text-black md:py-2 md:px-4 py-1 mt-6 flex justify-center rounded-full text-lg md:text-sm font-medium w-auto px-3">
              Youtuber
            </div>

            <div className="mx-2 bg-white border-2 border-black text-black md:py-2 py-1 md:px-4 mt-6 flex justify-center rounded-full text-lg md:text-sm font-medium w-auto px-3">
              App Developer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Creator;
