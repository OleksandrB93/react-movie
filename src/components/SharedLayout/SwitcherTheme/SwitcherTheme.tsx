import React from 'react';
import { SwitsherTheme, SunIcon, MoonIcon } from './SwitcherTheme.styled';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from 'redux/themeMode/themeSlice';
import { FaMoon } from 'react-icons/fa';
import { RiSunFill } from 'react-icons/ri';
import { selectDarkMode } from 'redux/themeMode/selectors';

export default function SwitcherTheme() {
  const dispatch = useDispatch();
  const darkMode = useSelector(selectDarkMode);
  return (
      <SwitsherTheme type="button" onClick={() => dispatch(toggleTheme())}>
        <SunIcon darkMode={darkMode}>
          <RiSunFill size={20} color={'#ffaa00'} />
        </SunIcon>
        <MoonIcon darkMode={darkMode}>
          <FaMoon size={15} color={'#ffff89'} />
        </MoonIcon>
      </SwitsherTheme>
  );
}
