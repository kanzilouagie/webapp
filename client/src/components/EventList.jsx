import React from "react";
import { inject, PropTypes, observer } from "mobx-react";
import styles from "./SongList.module.css";

const EventList = ({ eventStore }) => {
  const { events } = eventStore;
  return (
    <div className={styles.eventList}>
      {events.length > 0 ? (
        events.map(event => (
          <div>
            <span className={styles.itemWrapper}>
              <span className={styles.itemName}>{event.title}</span>
              <span className={styles.itemSong}>{event.date}</span>
            </span>
          </div>
        ))
      ) : (
          <p>No Events</p>
        )}
    </div>
  );
};

EventList.propTypes = {
  eventStore: PropTypes.observableObject.isRequired
};

export default inject(`eventStore`)(observer(EventList));
