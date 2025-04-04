import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data/restaurants.json';
import styles from './HomePage.module.css';
import perchiniMiniText from '../assets/img/perchini_mini_text.png';
import Header from '../components/Header';

const HomePage = () => {
	const cities = data.cities.map((city) => (
		<div key={city.id}>
			<Link className={styles.homePageLink} to={`/city/${city.id}`}>
				<h2>{city.name}</h2>
			</Link>
		</div>
	));

	return (
		<div className={styles.homePageContainer}>
			<div className={styles.homePagePhotoContainer}>
				<img src={perchiniMiniText} alt="В перчини есть!" />
			</div>
			<div className={styles.homePageContent}>
				<Header />
				<h1 className={styles.homePageTitle}>Добро пожаловать в Перчини</h1>
				<p>Выберите город:</p>
				{cities}
			</div>
		</div>
	);
};

export default HomePage;
