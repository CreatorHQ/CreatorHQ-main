import React from "react";

export default function Pagination({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="py-2">
      <nav className="block">
        <ul className="flex pl-0 rounded list-none flex-wrap">
          <li>
            {pageNumbers.map((number) => (
              <div
                onClick={() => {
                  paginate(number);
                }}
                // href="Creators"
                className={
                  currentPage === number
                    ? "m-1 rounded-xl bg-blue border-gray-900 text-gray-900 border-2 hover:bg-gray-200 relative inline-flex items-center px-4 py-2  text-sm font-medium"
                    : "m-1 rounded-xl bg-white border-gray-900 text-gray-900 border hover:bg-gray-200 relative inline-flex items-center px-4 py-2  text-sm font-medium"
                }
              >
                {number}
              </div>
            ))}
          </li>
        </ul>
      </nav>
    </div>
  );
}
