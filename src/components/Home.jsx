import React, { useState } from "react";
import { Events } from "./Events";
import { data } from "../data";

export const Home = () => {
  const [filteredData, setFilteredData] = useState([...data.meetups]);

  //   console.log("in home", filteredData);
  const changeHandler = (e) => {
    let selectedValue = e.target.value;
    // console.log("e value", selectedValue);
    const filteredDataByValue =
      selectedValue === "Both"
        ? [...data.meetups]
        : [
            ...data.meetups.filter(
              (event) => event.eventType === selectedValue
            ),
          ];
    setFilteredData(filteredDataByValue);
  };

  return (
    <div className="home-div">
      <div className="home-heading">
        <h1>Meetup Events</h1>
        <div className="home-dropdown-div">
          <select onChange={(e) => changeHandler(e)} className="home-dropdown">
            <option disabled>Search Event Type</option>
            <option value={"Both"}>Both</option>
            <option value={"Online"}>Online</option>
            <option value={"Offline"}>Offline</option>
          </select>
        </div>
      </div>
      <Events data={filteredData} />
    </div>
  );
};
