import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useContext } from "react";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("login");
  const isOnline = useOnline();
  const { user } = useContext(userContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between py-4 border bg-blue-600 shadow-lg ">
      <div className="logo-container">
        <img data-testid="logo"></img>
      </div>
      <div className="flex">
        <ul className="flex">
          <li className="mx-4 text-white hover:scale-110">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-4 text-white hover:scale-110">
            <Link to="/about">About Us</Link>
          </li>
          <li className="mx-4 text-white hover:scale-110">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="mx-4 text-white hover:scale-110">
            <Link to="/instamart">Instamart </Link>
          </li>
          <li className="mx-4 text-white hover:scale-110">
            <Link data-testid="cart-item" to="/cart">
              Cart {cartItems.length}
            </Link>
          </li>
          <h2 data-testid="online-status" className="mx-4 text-white">
            {isOnline ? "Online" : "Offline"}
          </h2>
          <h2>{user.name}</h2>
          <button
            className="mx-4 text-white hover:scale-110"
            onClick={() =>
              btnName === "login" ? setBtnName("logout") : setBtnName("login")
            }
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
