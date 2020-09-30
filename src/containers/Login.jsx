import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';
import Header from '../components/Header';
import '../assets/styles/components/Login.scss';

const Login = (props) => {
  const [form, setValues] = useState({
    email: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSummit = (event) => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');

    console.log('form: ', form);
  };

  return (
    <>
      <Header isLogin />
      <section className="login">
        <section className="login__container">
          <h2>Inicia sesión</h2>
          <form className="login__container--form" onSubmit={handleSummit}>
            <input
              className="login__input"
              type="text"
              placeholder="email"
              name="email"
              onChange={handleInput}
            />
            <input
              className="input"
              type="text"
              placeholder="Contraseña"
              name="password"
              onChange={handleInput}
            />

            <button className="login__button">Iniciar sesión</button>
            <div className="login__container--remember-me">
              <label>
                <input type="checkbox" id="cbox1" value="first_checkbox" />
                Recuérdame
              </label>
              <a href="/">Olvidé mi contraseña</a>
            </div>
          </form>
          <section className="login__container--social-media">
            <div>
              <img src={googleIcon} /> Inicia sesión con Google
            </div>
            <div>
              <img src={twitterIcon} /> Inicia sesión con Twitter
            </div>
          </section>
          <p className="login__container--register">
            No tienes ninguna cuenta <Link to={'/register'}>Regístrate</Link>
          </p>
        </section>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  loginRequest,
};
export default connect(null, mapDispatchToProps)(Login);
