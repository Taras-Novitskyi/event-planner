import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../Header/Header";
import { LayoutContainer, Main } from "./SharedLayout.styled";

export const SharedLayout = () => {

  return (
    <LayoutContainer>
      <Header />
      <Main>
        <Suspense>
          <Outlet />
        </Suspense>
      </Main>
    </LayoutContainer>
  );
};
