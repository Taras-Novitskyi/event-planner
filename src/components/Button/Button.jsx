import React from "react";

import { Btn } from "./Button.styled";

export const Button = ({ children, ...buttonProps }) => {
  return <Btn {...buttonProps}>{children}</Btn>;
};
