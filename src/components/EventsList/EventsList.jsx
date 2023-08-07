import React, { useState, useEffect } from "react";

import { EventItem } from "../EventItem/EventItem";
import { List, Item } from "./EventsList.styled";

export const EventsList = ({ events }) => {
  return (
    <List>
      {events.map((event) => (
        <Item key={event.id}>
          <EventItem event={event} />
        </Item>
      ))}
    </List>
  );
};
