import React from "react";
import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;
  // console.log(resData);
  const {name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla} = resData?.info ;

  return (
    <div className="m-4 p-4 w-[270px] h-[410px] rounded-lg bg-gray-100 hover:bg-gray-300">
      <img
        className="rounded-lg h-[170px] w-[260px]"
        alt="res-logo"
        src= {CDN_URL + cloudinaryImageId}
      />
      <h3  className="font-bold py-3 text-lg">{name}</h3>
      <h4 className="font-bold">{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

// Higher Order Component
// input - RestaurantCard =>> RestaurantCardPromoted
export const withIsOpenLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-green-500 text-white m-2 p-2 rounded-lg">
          Open
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};


export default RestaurantCard;
