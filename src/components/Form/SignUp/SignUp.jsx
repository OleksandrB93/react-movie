import { useDispatch } from 'react-redux';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Form } from 'components/Form/Form';
import { setUser } from 'redux/user/userSlice';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (email, password) => {
    const auth = getAuth();
    
    createUserWithEmailAndPassword(auth, email, password)
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
      .catch(console.erorr);
  };

  return (
    <div>
      <Form title="sign up" handleClick={handleRegister} />
    </div>
  );
}

export { SignUp };
