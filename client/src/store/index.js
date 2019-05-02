import EventStore from "./EventStore";
import UiStore from "./UiStore";

class Store {
  constructor() {
    this.uiStore = new UiStore(this);
    this.eventStore = new EventStore(this);
  }
}

export default new Store();
