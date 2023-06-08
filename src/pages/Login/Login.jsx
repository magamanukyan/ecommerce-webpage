import { Link } from "react-router-dom";
import scss from "./Login.module.scss";

const Login = () => {
  return (
    <div className={scss.container}>
      <div className={scss.container}>
        <div className={scss.wrapper}>
          <h1>SIGN IN</h1>
          <form action="">
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button>LOGIN</button>
            <Link to="/">DO NOT YOU REMEMBER THE PASSWORD?</Link>
            <Link to="/register">CREATE A NEW ACCOUNT </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
