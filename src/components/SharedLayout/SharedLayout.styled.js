import styled from "styled-components";

import GeoWave from "../../images/GeoWave.png";

export const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  flex-grow: 1;

  background-image: url(${GeoWave});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* color: ${(p) => p.theme.colors.whiteText}; */
`;
