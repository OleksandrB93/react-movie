import React from 'react';
import { useAuth } from 'components/hooks/useAuth';
import { FaUserCircle } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { UserBox, UserData } from './UserMenu.styled';
import { removeUer } from 'redux/user/userSlice';
import { useDispatch } from 'react-redux';
// import { HiOutlineLogin } from 'react-icons/hi';

export default function UserMenu() {
  const { isAuth,email } = useAuth();
  const dispatch = useDispatch();

  return (
    <UserBox>
      {isAuth ? (
        <div>
          <UserData>
            <FaUserCircle />
            <p>{email}</p>
          </UserData>

          <button type="button" onClick={() => dispatch(removeUer())}>
            <FiLogOut size={25} />
          </button>
        </div>
      ) : (
        ''
        // <button>
        //     <HiOutlineLogin size={25}/>
        // </button>
      )}
    </UserBox>
  );
}
