import React from 'react';
import { useParams, Link } from 'react-router-dom';
import data from '../data/restaurants.json';
import BackButton from '../components/BackButton';
import MoreInfoButton from '../components/MoreInfoButton'; // Импортируем новый компонент
import styles from './CityPage.module.css';

const CityPage = () => {
	const { cityId } = useParams();
	const cityData = data.cities.find((city) => city.id === parseInt(cityId));

	// Функция для отображения телефонов
	const renderPhones = (phones) => {
		let label = phones.length > 1 ? 'Телефоны для бронирования:' : 'Телефон для бронирования:';

		return (
			<>
				<p>{label}</p>
				{phones.map((phone) => (
					<p key={phone}>
						<a className={styles.cityPagePhoneLink} href={`tel:${phone}`}>
							{phone}
						</a>
					</p>
				))}
			</>
		);
	};

	const restaurants = cityData.restaurants.map((restaurant) => (
		<div className={styles.cityPageInfo} key={restaurant.id}>
			<h3>{restaurant.name}</h3>
			<p>Адрес: {restaurant.address}</p>
			{renderPhones(restaurant.phones)}
			<MoreInfoButton id={restaurant.id} />
		</div>
	));

	return (
		<div className={styles.cityPageContainer}>
			<div className={styles.cityPageHeader}>
				<h1 className={styles.cityPageTitle}>{cityData.name}</h1>
				<BackButton />
			</div>
			{restaurants}
		</div>
	);
};

export default CityPage;
