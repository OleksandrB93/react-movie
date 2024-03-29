import { HeaderNavigation } from './HeaderNavigation/Desktop/HeaderNavigation';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { SharedLayoutBox, HeaderMobileContent } from './SharedLayout.styled';
import { useMediaQuery } from 'react-responsive';
import { MobileHeaderNavigation } from './HeaderNavigation/MobileAndLeptop/MobileHeaderNavigation';
import Burger from './HeaderNavigation/MobileAndLeptop/Burger/Burger';
// import UserMenu from 'components/UserMenu/UserMenu';
import SwitcherTheme from './SwitcherTheme/SwitcherTheme';
import { selectIsSideBar } from 'redux/burger/selectors';
import { useSelector } from 'react-redux';

export const SharedLayout = () => {
  const isMobileAndLaptop = useMediaQuery({
    query: '(min-width: 768px)',
  });
   
  const isSideBar = useSelector(selectIsSideBar)

  return (
    <SharedLayoutBox isSideBar={isSideBar}>
      <HeaderMobileContent>
        {isMobileAndLaptop || <Burger isSideBar={isSideBar} />}
        <SwitcherTheme />
        {/* <UserMenu /> */}
      </HeaderMobileContent>
      <div>
        {isMobileAndLaptop ? <HeaderNavigation /> : <MobileHeaderNavigation />}
      </div>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </SharedLayoutBox>
  );
};
