import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        <div className="login-logo">
          <Link to="/">INICIO SESION</Link>
        </div>
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">ㅤ</p>
            <form action="/" method="post">
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Correo electronico" />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input type="password" className="form-control" placeholder="Contraseña" />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                </div>
                <div className="col-4">
                  <Link to=""></Link>
                  <button type="submit" className="btn btn-primary btn-block">Ingresar</button>
                </div>
              </div>
            </form>
            <div className="social-auth-links text-center mb-3">
              <p>- OR -</p>
              <Link to="#" className="btn btn-block btn-primary">
                <i className="fab fa-facebook mr-2" />Facebook 
              </Link>
              <Link to="#" className="btn btn-block btn-danger">
                <i className="fab fa-google-plus mr-2" /> Google+
              </Link>
            </div>
            <p className="mb-1">
              <Link to="/forgot-password">Olvide mi contraseña</Link>
            </p>
            <p className="mb-0">
              <Link to="/registro" className="text-center">Registrarse</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
