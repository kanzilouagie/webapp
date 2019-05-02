import { decorate, observable, configure, action, runInAction } from "mobx";
import Event from "../models/Event";
import Api from "../api";

configure({ enforceActions: `observed` });
class EventStore {
  events = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.api = new Api(`events`);
    this.getAll();
  }

  getAll = () => {
    this.api.getAll().then(d => d.forEach(this._addEvent));
  };

  addEvent = data => {
    const newEvent = new Event();
    newEvent.updateFromServer(data);
    this.events.push(newEvent);
    this.api
      .create(newEvent)
      .then(eventValues => newEvent.updateFromServer(eventValues));
  };

  _addEvent = values => {
    const event = new Event();
    event.updateFromServer(values);
    runInAction(() => this.events.push(event));
  };

  updateEvent = event => {
    this.api
      .update(event)
      .then(eventValues => event.updateFromServer(eventValues));
  };

  deleteEvent = event => {
    this.events.remove(event);
    this.api.delete(event);
  };
}

decorate(EventStore, {
  events: observable,
  addEvent: action,
  deleteEvent: action,
  updateEvent: action
});

export default EventStore;
