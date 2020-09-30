import React from 'react';
import notFoundImg from '../assets/static/notFound.svg';
import '../assets/styles/components/NotFound.scss';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <div className="notFound__container">
        <div className="notFound__container">
          <div className="notFound__row">
            <div className="notFound__content notFound__col ">
              <h1 className="notFound__title">Ooops.. Pagina no encontrada</h1>
              <h1 className="notFound__content-text">Intente luego</h1>
              <Link to="/">
                <button className="notFound__button">Go Home</button>
              </Link>
            </div>
            <div className="notFound__content notFound__col">
              <img className="notFound__img" src={notFoundImg} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
