import React from "react";

const Card = ({ item }) => {
  const { id, title, category, description, image } = item;
  return (
    <div
      className="max-w-md bg-white border border-gray-200 rounded-md shadow-sm"
      key={id}
    >
      <img
        className="rounded-t-lg max-w-[150px] mx-auto mt-5"
        src={image}
        alt=""
      />

      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 ">
            <span>{category}</span>
          </h5>
          <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 ">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 ">{description}</p>
      </div>
    </div>
  );
};

export default Card;
