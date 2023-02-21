import { Login } from 'components/Form/Login/Login';
import { Link } from 'react-router-dom';


export default function LoginPage() {
  const mystyle = {
    color: "black",
    backgroundColor: "gray",
    padding: "70px",
    fontFamily: "Arial"
  }
  return (
    <div>
      <h1 style={mystyle}>Log in</h1>

      <Login/>
      <Link to="/register" style={{ color: 'yellow' }}>
          Register
        </Link>
    </div>
  );
}
