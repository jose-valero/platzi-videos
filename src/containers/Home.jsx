import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItems from '../components/CarouselItems';
import Header from '../components/Header';

import '../assets/styles/App.scss';

const Home = ({ myList, trends, originals }) => {
  return (
    <>
      <Header />
      <Search isHome title="¿Qué quieres ver hoy?" placeHolder="Buscar..." />

      {myList.length > 0 && (
        <Categories title="Mi Lista">
          <Carousel>
            {myList.map((item) => (
              <CarouselItems key={item.id} {...item} isList={true} />
            ))}
          </Carousel>
        </Categories>
      )}

      <Categories title="Tendencias">
        <Carousel>
          {trends.map((item) => (
            <CarouselItems key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Categories title="Originales de Platzi Videos">
        <Carousel>
          {originals.map((item) => (
            <CarouselItems key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);

//mapDispatchToProps
