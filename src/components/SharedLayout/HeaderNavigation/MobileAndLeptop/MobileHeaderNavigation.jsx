import { motion } from 'framer-motion';
import { Nav, PageLink } from './MobileHeaderNavigation.styled';
import { GiFilmProjector } from 'react-icons/gi';
import { useState } from 'react';

import { selectIsSideBar } from 'redux/burger/selectors';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { toggleSideBar } from 'redux/burger/sideBarSlice';

export const MobileHeaderNavigation = () => {
  const [navbar, setNavBar] = useState(0);
  const dispatch = useDispatch();

  const isSideBar = useSelector(selectIsSideBar);

  const changeNavbar = () => {
    if (window.scrollY >= 70) {
      setNavBar(1);
    } else {
      setNavBar(0);
    }
  };

  const listVAriatns = {
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
      },
    }),
    hidden: { opacity: 0, y: 100 },
  };

  const menuObj = [
    {
      id: 1,
      to: '/',
      navbar: navbar,
      onClick: toggleSideBar(),
      contant: 'Moviestate',
    },
    {
      id: 2,
      to: '/',
      navbar: navbar,
      onClick: toggleSideBar(),
      contant: 'Home',
    },
    {
      id: 3,
      to: '/movies',
      navbar: navbar,
      onClick: toggleSideBar(),
      contant: 'Movies',
    },
  ];

  window.addEventListener('scroll', changeNavbar);
  return (
    <div>
      {isSideBar && (
        <Nav navbar={navbar}>
          <GiFilmProjector size={45} />
          {menuObj.map(({ id, to, navbar, onClick, contant }, i) => (
            <motion.div
              key={id}
              variants={listVAriatns}
              initial="hidden"
              animate="visible"
              custom={i}
            >
              <PageLink
                key={id}
                to={to}
                navbar={navbar}
                onClick={() => dispatch(onClick)}
              >
                {contant}
              </PageLink>
            </motion.div>
          ))}
        </Nav>
      )}
    </div>
  );
};
