import { HeaderNavigation } from "./HeaderNavigation/HeaderNavigation";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { SharedLayoutBox } from "./SharedLayout.styled";

export const SharedLayout = () => (
  <SharedLayoutBox>
    <div>
      <HeaderNavigation />
    </div>
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  </SharedLayoutBox>
);
