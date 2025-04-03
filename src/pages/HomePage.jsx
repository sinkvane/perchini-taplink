import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data/restaurants.json';
import styles from './HomePage.module.css';
import perchiniPhoto from '../assets/img/perchiniPhoto.jpg';
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
				<img className={styles.homePagePhoto} src={perchiniPhoto} alt="Перчини фото" />
			</div>
			<Header />
			<h1 className={styles.homePageTitle}>Добро пожаловать в Перчини</h1>
			<p>Выберите город:</p>
			{cities}
		</div>
	);
};

export default HomePage;
