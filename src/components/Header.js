import React, { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
// import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  // const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser);

  // subscribing to store using selectore
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  return (
    <div className="flex justify-between shadow-lg bg-gray-50">
      <div className="logo-container">
        <img className="w-24 pl-4" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 font-bold text-lg">
          {/* <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li> */}
          <li className="px-4 hover:drop-shadow-md">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 hover:drop-shadow-md">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 hover:drop-shadow-md">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 hover:drop-shadow-md">
            <Link to='/cart'>Cart-({cartItems.length} Items)</Link>
          </li>
          <button
            className="px-4 hover:drop-shadow-lg"
            onClick={() => {
              btnName === "Login" ? setBtnName("LogOut") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
