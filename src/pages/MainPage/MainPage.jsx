import React, { useState, useEffect } from "react";

import myEvents from "../../data/myEvents.json";
import { Container } from "../../components/Container/Container";
import { EventsList } from "../../components/EventsList/EventsList";
import { Title, Subtitle} from "./MainPage.styled";

const MainPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(myEvents);
  }, []);

  return (
    <Container>
      <Title>Work</Title>
      <Subtitle>
        Take a look at my latest projects and see how I can help bring your
        vision to life.
      </Subtitle>
      <EventsList events={events} />
    </Container>
  );
};

export default MainPage;
