import { useDispatch } from 'react-redux';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Form } from 'components/Form/Form';
import { setUser } from 'redux/user/userSlice';
import { useNavigate } from 'react-router-dom';

const Login = ({toggle,setToggle}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate('/');
      })
      .catch(() => alert('Invalid user!'));
  };
  const titleForm = 'User login';
  return (
    <div>
      <Form
        title="Log in"
        handleClick={handleLogin}
        titleForm={titleForm}
        toggle={toggle}
        setToggle={setToggle}
      />
    </div>
  );
};

export { Login };
