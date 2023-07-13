import React from "react";
import { Events } from "./Events";

export const Home = () => {
  return (
    <div className="home-div">
      <div className="home-heading">
        <h1>Meetup Events</h1>
        <div className="home-dropdown-div">
          <select className="home-dropdown">
            <option disabled>Search Event Type</option>
            <option>Online</option>
            <option>Offline</option>
            <option>Both</option>
          </select>
        </div>
      </div>
      <Events />
    </div>
  );
};
