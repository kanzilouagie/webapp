import React from "react";
import { PropTypes, inject } from "mobx-react";
import styles from "../styles/layout.module.css";

const AddEvent = ({ eventStore }) => {
  const dateRef = React.createRef();
  const titleRef = React.createRef();

  const handleSubmitForm = e => {
    e.preventDefault();
    if (titleRef.current.value) {
      eventStore.addEvent({
        title: titleRef.current.value,
        date: dateRef.current.value
      });
      titleRef.current.value = ``;
      dateRef.current.value = ``;
    }
  };

  const getDate = () => {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    if(day < 10) {
      day = `0${day}`
    }
    if(month < 10) {
      month = `0${month}`
    }
    let fullDate = `${year}-${month}-${day}`
    return fullDate;
  }
  return (
    <form onSubmit={handleSubmitForm} className={styles.formAdd}>
      <input
        name="title"
        placeholder="Event title"
        defaultValue=""
        type="text"
        ref={titleRef}
        className={styles.form_input}
      />
      <input
        name="date"
        placeholder={getDate()}
        defaultValue={getDate()}
        type="date"
        ref={dateRef}
        className={styles.form_input}
      />
      <button type="submit" value="Add" className={styles.button}>
        Add
      </button>
    </form>
  );
};

AddEvent.propTypes = {
  eventStore: PropTypes.observableObject.isRequired
};

export default inject(`eventStore`)(AddEvent);
