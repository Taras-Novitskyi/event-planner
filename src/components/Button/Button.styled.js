import styled from "styled-components";

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 160px;
  height: 40px;

  color: #e4e6f0;
  background-color: ${(p) => p.theme.colors.lightBgColor};
  border: 1px solid #a6a9b3;
  border-radius: 4px;

  transition: all 0.25s ease-out;

  &:hover {
    color: #ffffff;
    border: 1px solid #e4e6f0;
  }
`;
