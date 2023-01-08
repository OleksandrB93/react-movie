import React from 'react';
import { BergerBox, BurgerIcon } from './Burger.styled';
import { useDispatch } from 'react-redux';

import { toggleSideBar } from 'redux/burger/sideBarSlice';

export default function Burger({ isSideBar }) {
  const dispatch = useDispatch();
  return (
    <BergerBox type="button" onClick={() => dispatch(toggleSideBar())}>
      <BurgerIcon isSideBar={isSideBar}>
        <span></span>
        <span></span>
        <span></span>
      </BurgerIcon>
    </BergerBox>
  );
}
