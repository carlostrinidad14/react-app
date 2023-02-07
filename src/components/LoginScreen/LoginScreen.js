import { useState } from "react";
import { Link } from "react-router-dom";
import { useLoginContext } from "../../context/LoginContext";
import "./LoginScreen.scss";

const LoginScreen = () => {
  const { login, user, loading } = useLoginContext();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    login(values);
  };

  return (
    <div className="login-screen">
      <div className="login card shadow-lg">
        <h2>Login</h2>
        <hr />

        <form onSubmit={handleSubmit}>
          <input
            className="form-control my-2"
            type="email"
            value={values.email}
            onChange={handleInputChange}
            name="email"
          />
          <input
            className="form-control my-2"
            type="password"
            value={values.password}
            onChange={handleInputChange}
            name="password"
          />

          <button className="btn btn-primary" disabled={loading}>
            {loading ? "Cargando..." : "Ingresar"}
          </button>
          {user.error && <p className="error">{user.error}</p>}
        </form>
        <br />
        <Link to="/register">Registrarme</Link>
      </div>
    </div>
  );
};
export default LoginScreen;
