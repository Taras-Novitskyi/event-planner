import styled from "styled-components";

export const StyledContainer = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 0 16px;
  width: ${(p) => p.theme.breakPoints[0]};

  @media screen and (min-width: 768px) {
    padding: 0 40px;
    width: ${(p) => p.theme.breakPoints[1]};
  }
  @media screen and (min-width: 1280px) {
    padding: 0 200px;
    width: ${(p) => p.theme.breakPoints[2]};
  }
`;
