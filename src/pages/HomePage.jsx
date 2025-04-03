import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data/restaurants.json';
import styles from './HomePage.module.css';

const HomePage = () => {
  const cities = data.cities.map(city => (
    <div key={city.id}>
      <Link className={styles.homePageLink} to={`/city/${city.id}`}>{city.name}</Link>
    </div>
  ));

  return (
    <div className={styles.homePageContainer}>
      <h1 className={styles.homePageTitle}>Добро пожаловать в Перчини!</h1>
      <p>Выберите город:</p>
      {cities}
    </div>
  );
};

export default HomePage;