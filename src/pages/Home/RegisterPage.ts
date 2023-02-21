import { SignUp } from 'components/Form/SignUp/SignUp';
import { Link } from 'react-router-dom';

export default function RegisterPage() {
  const mystyle = {
    color: 'black',
    backgroundColor: 'gray',
    padding: '70px',
    fontFamily: 'Arial',
  };
  return (
    <div>
      <h1 style={mystyle}>Register</h1>
      <SignUp />
      <p style={{ color: 'white' }}>
        Allready have an account?{' '}
        <Link to="/login" style={{ color: 'yellow' }}>
          Sign In
        </Link>
      </p>
    </div>
  );
}
