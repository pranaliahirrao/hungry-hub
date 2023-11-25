import React from "react";
import { IMG_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {name, cuisines, avgRatingString, costForTwo, cloudinaryImageId} = resData.info ;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src= {IMG_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString} Stars</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
