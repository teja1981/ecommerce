import React from 'react';
import '../styles/home.css';
import CustomCarousel from '../components/CustomCarousel';
import Categories from '../components/Categories';

const Home = () => {
  return (
    <div className='home-main'>
      <div className='carousel'>
        <CustomCarousel />
      </div>
      <div className='categories'>
        <Categories />
      </div>
    </div>
  );
};

export default Home;
