import React from "react";
import { Search } from "./Search";
import img from "../Images/pngwing.com.png";
export const Header = () => {
  return (
    <div className="header">
      <img className="header-img" src={img} alt="" />
      <Search />
    </div>
  );
};
