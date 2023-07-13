import React from "react";
import { BiSearchAlt } from "react-icons/bi";
export const Search = () => {
  return (
    <div className="search">
      <div className="search-icn">
        {" "}
        <BiSearchAlt size={20} />
      </div>
      <input placeholder="Search by title and tags" />
    </div>
  );
};
