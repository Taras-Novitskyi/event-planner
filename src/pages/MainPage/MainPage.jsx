import React, { useState, useEffect } from "react";

import myEvents from "../../data/myEvents.json";
import { Container } from "../../components/Container/Container";
import { EventsList } from "../../components/EventsList/EventsList";
import { MenuButtons} from "../../components/MenuButtons/MenuButtons";
import { Title } from "./MainPage.styled";

const MainPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(myEvents);
  }, []);

  return (
    <Container>
      <Title>My events</Title>
      <MenuButtons/>
      <EventsList events={events} />
    </Container>
  );
};

export default MainPage;
