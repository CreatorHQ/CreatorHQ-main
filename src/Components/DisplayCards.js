import React, { useState } from "react";
import Cards from "../Components/Cards";
import Pagination from "./Pagination";
//Images
import a from "../assets/bojack characters/bojack.jpeg";
import b from "../assets/bojack characters/diane nguyen.jpg";
import c from "../assets/bojack characters/peanutbutter.jpg";
import d from "../assets/bojack characters/princess carolyn.jpg";
import e from "../assets/bojack characters/Sarah_Lynn.jpeg";
import f from "../assets/bojack characters/todd chavez.jpeg";

function DisplayCards() {
  const posts = [
    {
      image: a,
      name: "Hugh mann",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pellentesque convallis felis, vitae ultricies eros. Fusce faucibus ante non velit scelerisque, in hendrerit est varius.",
    },
    {
      image: b,
      name: "Hugh mann",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pellentesque convallis felis, vitae ultricies eros. Fusce faucibus ante non velit scelerisque, in hendrerit est varius.",
    },
    {
      image: c,
      name: "Hugh mann",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pellentesque convallis felis, vitae ultricies eros. Fusce faucibus ante non velit scelerisque, in hendrerit est varius.",
    },
    {
      image: d,
      name: "Hugh mann",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pellentesque convallis felis, vitae ultricies eros. Fusce faucibus ante non velit scelerisque, in hendrerit est varius.",
    },
    {
      image: e,
      name: "Hugh mann",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pellentesque convallis felis, vitae ultricies eros. Fusce faucibus ante non velit scelerisque, in hendrerit est varius.",
    },
    {
      image: f,
      name: "Hugh mann",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pellentesque convallis felis, vitae ultricies eros. Fusce faucibus ante non velit scelerisque, in hendrerit est varius.",
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section id="Creators">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mt-24 md:ml-24">
        {currentPosts.map((post) => {
          return <Cards image={post.image} name={post.name} text={post.text} />;
        })}
      </div>
      {/* Pagination */}
      <div className="flex flex-row md:justify-end justify-center md:pr-56 mt-6">
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts="6"
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </section>
  );
}

export default DisplayCards;
