import React from "react";
import { data } from "../data";
export const Events = () => {
  return (
    <div className="events">
      {data.meetups.map((event, i) => (
        <div key={i} className="event-card">
          <div>
            <img className="event-img" src={event.eventThumbnail} alt="" />
            <p className="event-status">{event.eventType} Event</p>
          </div>
          <div className="event-title-div">
            <p className="event-time">{event.eventStartTime}</p>
            <h4 className="event-title">
              <strong>{event.title}</strong>
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
};
