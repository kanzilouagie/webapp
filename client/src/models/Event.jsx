import uuid from "uuid";
import { decorate, observable, action, computed } from "mobx";

class Event {
  constructor(title, date, id = uuid.v4()) {
    this.id = id;
    this.title = title;
    this.date = date;
  }

  setId = value => (this.id = value);
  setTitle = value => (this.title = value);
  setDate = value => (this.date = value);

  updateFromServer = values => {
    this.setId(values._id);
    this.setTitle(values.title);
    this.setDate(values.date);
  };

  get values() {
    return { title: this.title, date: this.date };
  }
}

decorate(Event, {
  id: observable,
  title: observable,
  date: observable,
  setId: action,
  setTitle: action,
  setDate: action,
  values: computed
});

export default Event;
