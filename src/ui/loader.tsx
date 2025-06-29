import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <span
        className={`animate-spin w-10 h-10 border-l-2 border-t-2 border-blue-500 rounded-full`}
      ></span>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Loader;
