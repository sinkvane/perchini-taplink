import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/restaurants.json';
import BackButton from '../components/BackButton';
import styles from './RestaurantPage.module.css';
import LinkIcon from '../components/LinkIcon';

const RestaurantPage = () => {
	const { restaurantId } = useParams();
	const restaurantData = data.cities
		.reduce((acc, city) => acc.concat(city.restaurants), [])
		.find((restaurant) => restaurant.id === parseInt(restaurantId));

	// Функция для отображения телефонов
	const renderPhones = (phones) => {
		let label = phones.length > 1 ? 'Телефоны для бронирования:' : 'Телефон для бронирования:';

		return (
			<>
				<p>{label}</p>
				{phones.map((phone) => (
					<p key={phone}>
						<a href={`tel:${phone}`}>{phone}</a>
					</p>
				))}
			</>
		);
	};

	return (
		<div className={styles.restaurantPageContainer}>
			<h1 className={styles.restaurantPageTitle}>{restaurantData.name}</h1>
			<p className={styles.restaurantPageAddress}>Адрес: {restaurantData.address}</p>
			{renderPhones(restaurantData.phones)}
			<p>
				<a
					className={styles.restaurantPageSpecialtyLink}
					href={restaurantData.specialtyUrl}
					target="_blank"
					rel="noopener noreferrer"
				>
					Блюдо месяца
					<LinkIcon className={styles.restaurantPageLinkIcon} />
				</a>
			</p>
			<p>
				<a
					className={styles.restaurantPageLinks}
					href={restaurantData.menuUrl}
					target="_blank"
					rel="noopener noreferrer"
				>
					Посмотреть меню
					<LinkIcon className={styles.restaurantPageLinkIcon} />
				</a>
			</p>
			<div className={styles.restaurantPageSchedule}>
				<p>График работы:</p>
				<p className={styles.restaurantPageOpenHours}>{restaurantData.openHours}</p>
			</div>
			<p>{restaurantData.buisnessLunch ? restaurantData.buisnessLunch : null}</p>
			<BackButton />
			{/* <p>Социальные сети:</p>
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
			</ul> */}
		</div>
	);
};

export default RestaurantPage;
