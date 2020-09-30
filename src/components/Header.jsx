import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOutRequest } from '../actions';
import gravatar from '../utils/gravatar';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';
import classNames from 'classnames';
import '../assets/styles/components/Header.scss';

const Header = (props) => {
  const { user, isLogin, isRegister } = props;

  const hasUser = Object.keys(user).length > 0;

  const handleLogOut = () => {
    props.logOutRequest({});
  };

  const headerClass = classNames('header', {
    isLogin,
    isRegister,
  });

  return (
    <header className={headerClass}>
      <Link to="/">
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {/*Validacion #1*/}
          {hasUser ? (
            <img src={gravatar(user.email)} alt={user.email} />
          ) : (
            <img src={userIcon} alt="user icon" />
          )}
          {/*Validacion #/1*/}

          <p>Perfil</p>
        </div>
        <ul>
          {/*Validacion #2*/}
          {hasUser ? (
            <li>
              <Link to="/">{user.name}</Link>
            </li>
          ) : null}
          {/*Validacion #/2*/}
          {/*mostrar/ocultar*/}
          {/*Validacion #3*/}
          {hasUser ? (
            <li>
              <Link to="#logOut" onClick={handleLogOut}>
                Cerrar Sesión
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/login">Iniciar Sesión</Link>
            </li>
          )}
          {/*Validacion #/3*/}
        </ul>
      </div>
    </header>
  );
};

//hay mejor forma de trabajar con el estado y es con el reducer
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logOutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
