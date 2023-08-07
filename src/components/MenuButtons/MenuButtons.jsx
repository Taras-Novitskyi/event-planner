import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

import { Button } from "../Button/Button";
import { Container, Item } from "./MenuButtons.styled";

export const MenuButtons = () => {
  return (
    <Container>
      <Button
        type="button"
        onClick={() => {
          console.log("click");
        }}
      >
        <RxHamburgerMenu />
        Add new event
      </Button>
    </Container>
  );
};
