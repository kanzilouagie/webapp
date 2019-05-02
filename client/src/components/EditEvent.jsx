import React, { Component } from "react";
import { inject, observer, PropTypes } from "mobx-react";
import styles from "../styles/layout.module.css";
import uuid from "uuid";

class EditEvent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      edit: false,
      title: '',
      date: ''
    };
  }

  handleSubmitSave = e => {
    e.preventDefault();
    this.props.saveEvent(this.props.event)
    this.setState({ edit: false })
  };

  handleSubmitDelete = e => {
    e.preventDefault();
    this.props.removeEvent(this.props.event)
    this.setState({ edit: false })
  };

  render() {
    const { event } = this.props;
    const { edit } = this.state;
    return edit ? (
      <>
        <form className={styles.editEventPressed}>
          <input
            type="text"
            className={styles.form_input}
            value={event.title}
            onChange={e => event.setTitle(e.target.value)}
          />
          <input
            type="date"
            className={styles.form_input}
            value={event.date}
            onChange={e => event.setDate(e.target.value)}
          />
          <div className={styles.flexButtons}>
          <input type="submit" className={styles.buttonEdit} value="Save" onClick={this.handleSubmitSave} />
          <input type="submit" className={styles.buttonEdit} value="Delete" onClick={this.handleSubmitDelete} />
          </div>
        </form>
      </>
    ) : (
        <article key={uuid.v4()} className={styles.editEvent}>
          <div className={styles.itemWrapper}>
          <button className={styles.editBtn} onClick={() => this.setState({ edit: true })}>Edit</button>
          <p className={styles.itemDate}>{event.date}</p>
          </div>
          <p className={styles.itemDescription}>{event.title}</p>
        </article >
      );
  }
}


EditEvent.propTypes = {
  event: PropTypes.observableObject.isRequired,
  eventStore: PropTypes.observableObject.isRequired
};

export default inject(`eventStore`)(observer(EditEvent));
