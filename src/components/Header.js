import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Header = () => {
  const [btnName, setBtnName] = useState("login");
  const isOnline = useOnline();

  return (
    <div className="header">
      <div className="logo-container">
        <img></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/instamart">Instamart </Link>
          </li>
          <li>Cart</li>
          <h2>{isOnline ? "Online" : "Offline"}</h2>
          <button
            className="logout-btn"
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
