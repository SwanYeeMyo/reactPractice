import React, { useState } from "react";
import { Link } from "react-router-dom";

const Products = ({ item, searchQuery, highlightMatch }) => {
  const { id, title, image, category, description } = item;
  return (
    <>
      <div
        className="max-w-md bg-white border border-gray-200 rounded-lg shadow"
        key={id}
      >
        <Link to={`/products/${id}`}>
          <img
            className="rounded-t-lg max-w-[150px] mx-auto mt-5"
            src={image}
            alt=""
          />
        </Link>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 ">
              <span
                dangerouslySetInnerHTML={{
                  __html: highlightMatch(category, searchQuery),
                }}
              />
            </h5>
            <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 ">
              <span
                dangerouslySetInnerHTML={{
                  __html: highlightMatch(title, searchQuery),
                }}
              />
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 ">
            <span
              dangerouslySetInnerHTML={{
                __html: highlightMatch(
                  description.substring(0, 100),
                  searchQuery
                ),
              }}
            />
          </p>
        </div>
      </div>
    </>
  );
};

export default Products;
