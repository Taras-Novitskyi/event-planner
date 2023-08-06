import React, { lazy, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { theme } from "./utils/theme";
import { GlobalStyles } from "./GlobalStyles";

import { SharedLayout } from "./components/SharedLayout/SharedLayout";
const MainPage = lazy(() => import("./pages/MainPage"));
const EventPage = lazy(() => import("./pages/EventPage"));
const AddEvent = lazy(() => import("./pages/AddEventPage"));
const EditEvent = lazy(() => import("./pages/EditEventPage"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<MainPage />} />
            <Route path="event/:eventId" element={<EventPage />} />
            <Route path="addEvent" element={<AddEvent />} />
            <Route path="editEvent" element={<EditEvent />} />
          </Route>
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
