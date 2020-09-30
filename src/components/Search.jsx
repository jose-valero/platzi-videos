import React from 'react';
import classNames from 'classnames';
import '../assets/styles/components/Search.scss';

const Search = ({ isHome, title, placeHolder }) => {
  const inputStyle = classNames('input', {
    isHome,
  });
  return (
    <section className="main">
      <h2 className="main__title">{title}</h2>
      <input type="text" className={inputStyle} placeholder={placeHolder} />
    </section>
  );
};
export default Search;
