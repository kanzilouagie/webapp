import React from "react";
import { inject, observer, PropTypes } from "mobx-react";
import EditEvent from "../components/EditEvent";
import AddEvent from "../components/AddEvent";
import PageHeader from "../components/PageHeader";
import styles from "../styles/layout.module.css";
import withAuthentication from "../components/auth/WithAuthentication";

const Admin = ({ uiStore, eventStore }) => {

  const handleLogout = e => {
    e.preventDefault();
    uiStore.logout()
  }


  return (
    <>
      <PageHeader title={`Agenda`} stijling={styles.adminHeader}/>
      <button onClick={handleLogout} className={styles.logoutbtn}>Logout</button>
      <section className={styles.sectionAddEvent}>
      <h3>Add event</h3>
        <div className={styles.addEvent}>
          <div>
            <AddEvent />
          </div>
        </div>
        <div>
          <h3>My Events</h3>
          <div>
            <ul className={styles.flexEvents}>
              {eventStore.events.map(event => (
                <EditEvent
                  key={event.id}
                  event={event}
                  saveEvent={eventStore.updateEvent}
                  removeEvent={eventStore.deleteEvent}
                />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

Admin.propTypes = {
  eventStore: PropTypes.observableObject.isRequired
};

export default inject(`eventStore`)(withAuthentication(observer(Admin)));
