import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  height: ${(p) => p.theme.space(15)};

  background-color: ${(p) => p.theme.colors.mainBgColor};
  border-bottom: 1px solid ${(p) => p.theme.colors.accent};
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled(NavLink)`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #53336e;
  
  &:hover,
  :focus {
    color: ${(p) => p.theme.colors.lightBgColor};
  }
`;

export const Input = styled.input`
  width: 100px;
`;
