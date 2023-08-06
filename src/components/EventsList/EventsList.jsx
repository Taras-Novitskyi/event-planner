import React, { useState, useEffect } from "react";

import { EventItem } from "../EventItem/EventItem";
import { Events, Item } from "./EventsList.styled";

export const EventsList = ({events}) => {

  return (
      <Events>
        {events.map((event) => (
          <Item key={event.id}>
            <EventItem event={event} />
          </Item>
        ))}
      </Events>
  );
};
