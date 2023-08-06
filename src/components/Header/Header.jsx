import { useLocation } from "react-router-dom";

import { Container } from "../Container/Container";
import {
  StyledHeader,
  HeaderWrapper,
  Logo,
  StyledNav,
  Options,
  Input,
} from "../Header/Header.styled";

export const Header = () => {
  const location = useLocation();

  return (
    <StyledHeader>
      <Container>
        <HeaderWrapper>
          <StyledNav>
            <Logo to="/">Event Planner</Logo>
          </StyledNav>
          <Options>
            <Input />
            <Input />
          </Options>
        </HeaderWrapper>
      </Container>
    </StyledHeader>
  );
};
