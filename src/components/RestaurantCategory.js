import React from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  //   console.log(data);
  return (
    <div>
      {/* Header */}
      <div className="w-6/12 my-4 bg-gray-50 shadow-lg p-4 mx-auto">
        <div  className="flex justify-between cursor-pointer">
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        <ItemList items={data.itemCards} />
      </div>
    </div>
  );
};

export default RestaurantCategory;