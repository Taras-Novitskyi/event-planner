import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

import { Button } from "../Button/Button";
import { Container } from "./MenuButtons.styled";

export const MenuButtons = () => {
  return (
    <Container>
      <Button
        type="button"
        onClick={() => {
          console.log("click");
        }}
      >
        <AiOutlinePlus
          style={{ width: "24px", height: "24px", color: "#fff" }}
        />
        Add new event
      </Button>
    </Container>
  );
};
