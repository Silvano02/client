import React from "react";
import { Link } from "react-router-dom";
import GooogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Streamer
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All streams
        </Link>
        <GooogleAuth />
      </div>
    </div>
  );
};

export default Header;
