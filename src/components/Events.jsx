import React from "react";
import { useNavigate } from "react-router-dom";
import { EventDetails } from "./EventDetails";
// import { data } from "../data";
export const Events = ({ data }) => {
  const navigate = useNavigate();
  //   console.log("in events", data);
  const formatEventStartTime = (startTime) => {
    const options = {
      weekday: "short",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    const formattedDate = new Date(startTime).toLocaleString("en-US", options);
    return formattedDate;
  };
  return (
    <div className="events">
      {data?.map((event, i) => (
        <div key={i} className="event-card">
          <div>
            <img
              onClick={() => {
                <EventDetails />;
                navigate(`/event/${event.id}`);
              }}
              className="event-img"
              src={event?.eventThumbnail}
              alt=""
            />
            <p className="event-status">{event?.eventType} Event</p>
          </div>
          <div className="event-title-div">
            <p className="event-time">
              {formatEventStartTime(event?.eventStartTime)}
            </p>
            <h4 className="event-title">
              <strong>{event?.title}</strong>
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
};
