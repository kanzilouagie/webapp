import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import AddEvent from "../components/AddEvent";
import EditEvent from "../components/EditEvent";

import "../styles/index.css";
import Event from "../models/Event";
import PageHeader from "../components/PageHeader";
import EventList from "../components/EventList";
import Admin from "../containers/Admin";

const event = new Event(`Cola`, 2.5);

storiesOf(`UI`, module)
  .add(`PageHeader`, () => <PageHeader />);

storiesOf(`Events`, module)
  .add(`AddEvent`, () => <AddEvent />)
  .add(`EditEvent`, () => <EditEvent event={event} />);

storiesOf(`EventList`, module).add(`Eventlist`, () => <EventList />);

storiesOf(`Containers`, module)
  .add(`Admin`, () => <Admin />);
