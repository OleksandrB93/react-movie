import React from 'react';
import { useAuth } from 'components/hooks/useAuth';
import { FaUserCircle } from 'react-icons/fa';
import { TbLogout } from 'react-icons/tb';
import { UserBox, UserData } from './UserMenu.styled';
import { removeUer } from 'redux/user/userSlice';
import { useDispatch } from 'react-redux';

export default function UserMenu() {
  const { isAuth, email } = useAuth();
  const dispatch = useDispatch();

  const getNameEmail = email.split('@')[0]; 

  return (
    <UserBox>
      {isAuth ? (
        <UserBox>
          <UserData>
            <FaUserCircle size={25}/>
            <p>{getNameEmail}</p>
          </UserData>

          <button type="button" onClick={() => dispatch(removeUer())}>
            <TbLogout size={30} />
          </button>
        </UserBox>
      ) : (
        ''
      )}
    </UserBox>
  );
}
