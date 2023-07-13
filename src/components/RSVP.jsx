import React, { useState } from "react";

export const RSVP = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(!show)} className="rsvp-btn">
        RSVP
      </button>
      {show && (
        <div className="rsvp-outer">
          <div className="rsvp-inner">
            <div className="rsvp-card">
              <h3>Complete your RSVP</h3>
              <p className="rsvp-desc">Fill in your personal Information</p>
              <label>
                Name:
                <input />
              </label>
              <label>
                Email:
                <input />
              </label>
              {true && <p>* You have tomake the payment at the venue</p>}
              <button onClick={() => setShow(!show)}>RSVP</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
