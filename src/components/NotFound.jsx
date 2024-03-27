import React from "react";

const NotFound = () => {
  return (
    <div className=" mt-52 col-span-4 flex flex-col items-center justify-center">
      <svg
        className="w-12 h-12 text-gray-500 mb-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 4v16m0 0l-4-4m4 4l4-4"
        ></path>
      </svg>
      <p className="text-lg font-medium text-gray-500 mb-2">
        Hmm... We couldn't find what you're looking for.
      </p>
      <p className="text-sm text-gray-500">Try adjusting your search query.</p>
    </div>
  );
};

export default NotFound;
