import LoginForm from "components/LoginForm";
import welcome from "assets/images/welcome.png";
import { LoginWrapper } from "styles/styledComponents/loginWrapper";

const Login = () => {
  return (
    <LoginWrapper>
      <h1>Login</h1>

      <div className="form-content">
        <img src={welcome} alt="" />
        <LoginForm />
      </div>
    </LoginWrapper>
  );
};

export default Login;
