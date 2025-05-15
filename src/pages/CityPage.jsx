import { useParams } from 'react-router-dom';
import data from '../data/restaurants.json';
import BackButton from '../components/BackButton';
import styles from './CityPage.module.css';

import LinkIcon from '../components/LinkIcon';
import PhoneIcon from '../components/PhoneIcon';

import YandexEdaLink from '../components/yandexEdaLink';

const CityPage = () => {
	const { cityId } = useParams();
	const cityData = data.cities.find((city) => city.id === parseInt(cityId));

	const renderPhones = (phones) => {
		let label = phones.length > 1 ? 'Телефоны для бронирования:' : 'Телефон для бронирования:';

		return (
			<>
				<p>{label}</p>
				{phones.map((phone) => (
					<p key={phone}>
						<a className={styles.cityPagePhoneLink} href={`tel:${phone}`}>
							{phone}
							<PhoneIcon className={styles.cityPageIcon} />
						</a>
					</p>
				))}
			</>
		);
	};

	const restaurants = cityData.restaurants.map((restaurant) => (
		<div className={styles.cityPageInfo} key={restaurant.id}>
			<h3 className={styles.cityPageRestaurantTitle}>{restaurant.name}</h3>
			<p>Адрес: {restaurant.address}</p>
			{renderPhones(restaurant.phones)}
			<p>
				<a
					className={styles.cityPageLinks}
					href={restaurant.specialtyUrl}
					target="_blank"
					rel="noopener noreferrer"
				>
					Блюдо месяца
					<LinkIcon className={styles.cityPageIcon} />
				</a>
			</p>
			<p>
				<a
					className={styles.cityPageLinks}
					href={restaurant.menuUrl}
					target="_blank"
					rel="noopener noreferrer"
				>
					Посмотреть меню
					<LinkIcon className={styles.cityPageIcon} />
				</a>
			</p>
			<div className={styles.cityPageSchedule}>
				<p>График работы:</p>
				<p className={styles.cityPageOpenHours}>{restaurant.openHours}</p>
			</div>
			<p>{restaurant.buisnessLunch ? restaurant.buisnessLunch : null}</p>
		</div>
	));

	return (
		<div className={styles.cityPageContainer}>
			<div className={styles.cityPageHeader}>
				<h1 className={styles.cityPageTitle}>{cityData.name}</h1>
				<BackButton />
			</div>
			<YandexEdaLink />
			{restaurants}
		</div>
	);
};

export default CityPage;
