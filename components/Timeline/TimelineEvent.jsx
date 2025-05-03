// components/Timeline/TimelineEvent.jsx
import React from 'react';
import './TimelineEvent.css';

const TimelineEvent = ({ event }) => {
  return (
    <div className="timeline-event">
      <div className="event-header">
        <h3>{event.title}</h3>
        <span className="event-date">{event.date}</span>
      </div>
      <div className="event-content">
        <p>{event.description}</p>
        {event.image && (
          <div className="event-image">
            <img src={event.image} alt={event.title} />
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelineEvent;
