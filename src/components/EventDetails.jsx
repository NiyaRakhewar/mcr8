import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../data";
import { BsClock } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";
import { BiRupee } from "react-icons/bi";
import { RSVP } from "./RSVP";
export const EventDetails = () => {
  const { eventId } = useParams();

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

  const filteredData = data.meetups.find((event) => event.id === eventId);
  return (
    <div className="event-detailspage">
      <div className="event-leftside">
        <h1>{filteredData?.title}</h1>
        <p className="host">Hosted By:</p>
        <p>
          <strong>{filteredData.hostedBy}</strong>
        </p>
        <img className="detail-img" src={filteredData?.eventThumbnail} alt="" />
        <h3>
          <strong>Details:</strong>{" "}
        </h3>
        <p>{filteredData.eventDescription}</p>
        <h3>
          <strong>Additional Information: </strong>
        </h3>
        <p>
          <strong>Dress Code: </strong>{" "}
          {filteredData.additionalInformation.dressCode}
        </p>
        <p>
          <strong>Age Restrictions: </strong>{" "}
          {filteredData.additionalInformation.ageRestrictions}
        </p>
        <h3>
          <strong>Event Tags: </strong>
        </h3>
        <div className="tag-div">
          {filteredData.eventTags.map((tag) => (
            <button className="tag-btn">{tag}</button>
          ))}
        </div>
      </div>
      <div className="event-rightside">
        <div className="detail-time">
          <div className="time-div">
            <BsClock />
            <div className="time">
              <p>{formatEventStartTime(filteredData?.eventStartTime)} to </p>
              <p>{formatEventStartTime(filteredData?.eventEndTime)}</p>
            </div>
          </div>
          <div className="location-div">
            <MdOutlineLocationOn />
            <div className="location">
              <p>{filteredData.location}</p>
              <p>{filteredData.address}</p>
            </div>
          </div>
          <div className="price-div">
            <BiRupee />
            <p>{filteredData.price}</p>
          </div>
        </div>
        <div className="detail-speakers">
          <h3>
            <strong>Speakers: ({filteredData.speakers.length})</strong>
          </h3>
          <div className="speakers-div">
            {filteredData.speakers &&
              filteredData.speakers.map((speaker) => (
                <div className="speaker-card">
                  <img className="speaker-img" src={speaker.image} alt="" />
                  <p className="speaker-name">
                    <b>{speaker.name}</b>
                  </p>
                  <p className="desg">{speaker.designation}</p>
                </div>
              ))}
          </div>
          <RSVP />
        </div>
      </div>
    </div>
  );
};
