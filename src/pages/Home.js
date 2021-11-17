import React from "react";
import mobile from "../assets/gifs/mobile.gif";
import comp from "../assets/gifs/comp.gif";
import DisplayCards from "../Components/DisplayCards";

function Home() {
  return (
    <div className="container md:mt-28 md:p-12 p-6">
      {/* first page */}
      <div className="flex md:flex-row flex-col md:ml-20 ">
        <div className="flex flex-col md:w-1/2 md:m-0 ml-12">
          <p className="md:text-5xl text-3xl font-montserrat text-gray-800 ">
            Get paid for your content, directly.
          </p>
          <div className="flex flex-col md:-mt-52 w-4/5 md:hidden">
            <img src={mobile} alt="" />
          </div>

          <p className="font-lato mt-9 text-gray-800 w-5/6 text-justify font-bold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            quis turpis eros. Sed pharetra ex non magna pulvinar consequat. Sed
            condimentum tristique libero sed ullamcorper. Aenean vitae venenatis
            lorem. Etiam in tellus ac purus sagittis iaculis. Pellentesque
            habitant morbi tristique senectus
          </p>
          <div className="flex flex-row md:justify-start justify-center">
            <a
              href="#"
              className="bg-gray-800 text-white hover:bg-gray-700 hover:text-white py-2 mt-6 flex justify-center rounded-md text-sm font-medium w-48 -ml-12 md:-ml-0 md:w-32"
            >
              Register
            </a>
          </div>
        </div>
        <div className="flex flex-col md:w-1/3 md:m-0 m-6 md:-mt-4 md:ml-24 md:block hidden">
          <img src={mobile} alt="" />
        </div>
      </div>

      {/* second page */}
      <div className="flex md:flex-row flex-col mt-16 md:mr-2 md:mt-24 md:justify-between ">
        <div className="flex flex-col md:w-1/3 md:m-0 m-6 md:-mt-24 md:block hidden">
          <img src={comp} alt="" />
        </div>
        <div className="flex flex-col md:w-3/5  md:m-0 ml-12">
          <p className="md:text-5xl text-3xl font-montserrat text-gray-800 ">
            Support your Favourite Creators
          </p>
          <div className="flex flex-col md:-mt-52  w-4/5 md:hidden">
            <img src={comp} alt="" />
          </div>

          <p className="font-lato mt-9 text-gray-800 w-5/6 text-justify font-bold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            quis turpis eros. Sed pharetra ex non magna pulvinar consequat. Sed
            condimentum tristique libero sed ullamcorper. Aenean vitae venenatis
            lorem. Etiam in tellus ac purus sagittis iaculis. Pellentesque
            habitant morbi tristique senectus
          </p>
          <div className="flex flex-row md:justify-start justify-center">
            <a
              href="#"
              className="bg-gray-800 text-white hover:bg-gray-700 hover:text-white py-2 mt-6 flex justify-center rounded-md text-sm font-medium w-48 -ml-12 md:-ml-0 md:w-32"
            >
              Support
            </a>
          </div>
        </div>
      </div>
      {/* Third Page */}
      <div className="flex flex-col w-full md:mt-24 mt-16">
        <div className="flex flex-row justify-center md:m-0 ml-12">
          <form>
            <input
              className="border-2 border-gray-900 border-opacity-100  rounded-full w-64 md:w-100 py-2 px-4 -ml-16 md:-ml-0 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              // onChange={(event) => handleSearch(event)}
              placeholder="Search for a creator"
              autoComplete="off"
            />
          </form>
        </div>
        {/* Fourth Page */}
        <DisplayCards />
      </div>
      {/* Footer */}
      <footer className="footer-1 border-black border-t-2 py-1 mt-20">
        <div className="flex flex-row justify-between">
          <p className="font-lato font-bold">Copyright 2021 CreatorHQ</p>
          <p className="font-lato font-light">Privacy policy</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
