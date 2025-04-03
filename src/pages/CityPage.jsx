import React from 'react';
import { useParams, Link } from 'react-router-dom';
import data from '../data/restaurants.json';
import BackButton from '../components/BackButton';
import MoreInfoButton from '../components/MoreInfoButton'; // Импортируем новый компонент
import styles from './CityPage.module.css';

const CityPage = () => {
  const { cityId } = useParams();
  const cityData = data.cities.find(city => city.id === parseInt(cityId));
  const restaurants = cityData.restaurants.map(restaurant => (
    <div className={styles.cityPageInfo} key={restaurant.id}>
      <h3>{restaurant.name}</h3>
      <p>Адрес: {restaurant.address}</p>
      <p>Телефон: {restaurant.phone}</p>
      <MoreInfoButton id={restaurant.id} />
    </div>
  ));

  return (
    <div className={styles.cityPageContainer}>
      <h1>{cityData.name}</h1>
      {restaurants}
      <BackButton />
    </div>
  );
};

export default CityPage;