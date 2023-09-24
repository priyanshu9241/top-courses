import React from "react";

const Filter = ({ filterData, category, setCategory }) => {
  return (
    <>
      <div className="flex flex-wrap justify-center w-11/12 py-4 mx-auto space-x-4 max-w-max gap-y-4 ">
        {filterData.map((data) => {
          return (
            <button
              className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300 ${
                data.title === category
                  ? "bg-opacity-60 border-white"
                  : " bg-blue-950 bg-opacity-40 border-transparent"
              }`}
              key={data.id}
              onClick={() => setCategory(data.title)}
            >
              {data.title}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Filter;
