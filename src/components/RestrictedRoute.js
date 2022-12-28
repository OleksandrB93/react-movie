import { useAuth } from './hooks/useAuth';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeUer } from 'redux/user/userSlice';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isAuth, email } = useAuth();
  const dispatch = useDispatch()


  return isAuth ? <Navigate to={redirectTo} /> : Component;
};
