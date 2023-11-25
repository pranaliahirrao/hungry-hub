import React from "react";

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4"
      />
      <h3>KFC</h3>
      <h4>Burgers, Biryani</h4>
      <h4>4.4 Stars</h4>
      <h4>35 minutes</h4>
    </div>
  );
};

export default RestaurantCard;
