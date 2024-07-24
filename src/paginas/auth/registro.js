import React from "react";
import { Link } from "react-router-dom";

const Registro =() =>{
    return (
        <div class="hold-transition register-page" >
<div className="register-box">
  <div className="register-logo">
    <Link to="../../index2.html">Registrese aqui</Link>
  </div>
  <div className="card">
    <div className="card-div register-card-div">
      <p className="login-box-msg">ㅤ</p>
      <form action="../../index.html" method="post">
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Nombres y apellidos" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-user" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="email" className="form-control" placeholder="Correo electronico"/>
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
        <div className="input-group mb-3">
          <input type="password" className="form-control" placeholder="Recuperar contraseña" />
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
            <button type="submit" className="btn btn-primary btn-block">Registrarse</button>
          </div>
        </div>
      </form>
      <div className="social-auth-links text-center">
        <p>- O -</p>
        <Link to="#" className="btn btn-block btn-primary">
          <i className="fab fa-facebook mr-2" />
          Registrese usuando Facebook
        </Link>
        <Link to="#" className="btn btn-block btn-danger">
          <i className="fab fa-google-plus mr-2" />
          Registrese usando Google
        </Link>
      </div>
      <Link to="login.html" className="text-center">¿Ya tiene una cuenta?</Link>
    </div>
  </div>
</div>
</div>
    );
}

export default Registro;