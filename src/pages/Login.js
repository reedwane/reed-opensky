import LoginForm from "components/LoginForm";
import styled from "styled-components";

const Login = () => {
  return (
    <div className="login">
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
};

const LoginPage = styled.div`
  background: white;
`;

export default Login;
