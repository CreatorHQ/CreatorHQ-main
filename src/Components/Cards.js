import React from "react";
import { Link } from "react-router-dom";

function Cards({ image, text, name }) {
  return (
    <Link
      to={{
        pathname: `/${name}`,
        // state: {
        //   currentProject: option[0],
        //   currentProjectId: option[1],
        // },
      }}
    >
      <div className="flex flex-col items-center border-black box-content md:h-60 md:w-60 p-4 border-2 rounded-2xl">
        <img
          src={image}
          className="rounded-full h-24 w-24 border-2 border-black"
          alt="avatar"
        />
        <p className="font-lato text-xl mt-2">{name}</p>
        <p className="font-lato text-xs text-justify leading-4 mt-4 font-bold">
          {text}
        </p>
      </div>
    </Link>
  );
}

export default Cards;
