import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/restaurants.json';
import BackButton from '../components/BackButton';
import styles from './RestaurantPage.module.css';

const RestaurantPage = () => {
	const { restaurantId } = useParams();
	const restaurantData = data.cities
		.reduce((acc, city) => acc.concat(city.restaurants), [])
		.find((restaurant) => restaurant.id === parseInt(restaurantId));

	return (
		<div className={styles.restaurantPageContainer}>
			<h1 className={styles.restaurantPageTitle}>{restaurantData.name}</h1>
			<p className={styles.restaurantPageAddress}>Адрес: {restaurantData.address}</p>
			<p className={styles.restaurantPagePhone}>
				Телефон для бронирования:{' '}
				<a className={styles.restaurantPagePhoneLink} href={`tel:${restaurantData.phone}`}>
					{restaurantData.phone}
				</a>
			</p>
			<p>
				<a href={restaurantData.menuUrl} target="_blank" rel="noopener noreferrer">
					Посмотреть меню
				</a>
			</p>
			<div className={styles.restaurantPageSchedule}>
				<p>График работы:</p>
				<p>{restaurantData.openHours}</p>
			</div>
			<p>{restaurantData.buisnessLunch ? restaurantData.buisnessLunch : null}</p>
			<BackButton />
			<p>Социальные сети:</p>
			<ul className={styles.restaurantPageSocials}>
				{restaurantData.socialLinks.map((linkObj) => {
					const linkKey = Object.keys(linkObj)[0];
					const linkValue = linkObj[linkKey];
					return (
						<li key={linkKey}>
							<a href={linkValue} target="_blank" rel="noopener noreferrer">
								{linkKey}
							</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default RestaurantPage;
