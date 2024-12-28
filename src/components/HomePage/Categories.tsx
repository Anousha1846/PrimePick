import React from "react";
import { getAllCategory } from "../../../Requests/Requests";

const Categories = async () => {
  const category: string[] = await getAllCategory();
  return (
    <div className="py-16">
      <h1 className="text-center font-bold sm:text-4xl text-2xl font-sans capitalize text-charcoal">
        Shop By Categories
      </h1>
      {/* define grid */}
      <div className="mt-12 w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-8 md:py-4">
        {category.map((Categories) => {
          return (
            <div
              key={Categories}
              className="p-4  rounded-lg cursor-pointer border text-center hover:scale-105 transition-all duration-300 shadow-md bg-pearl "
            >
              <h1 className="text-sm sm:text-base text-black md:text-lg capitalize  font-semibold ">
                {Categories}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
