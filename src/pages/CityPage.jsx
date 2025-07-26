import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BackButton from '../components/BackButton';
import styles from './CityPage.module.css';

import axios from 'axios';

import LinkIcon from '../components/LinkIcon';
import PhoneIcon from '../components/PhoneIcon';
import YandexEdaLink from '../components/YandexEdaLink';

const CityPage = () => {
	const { cityId } = useParams();
	const [cityName, setCityName] = useState('');
	const [restaurants, setRestaurants] = useState([]);

	useEffect(() => {
		const fetchCityWithRestaurants = async () => {
			try {
				const res = await axios.get(
					`https://willing-harmony-e53be7bef5.strapiapp.com/api/cities?filters[factId]=${cityId}&populate[restaurants][populate]=PhoneNumber`
				);
				const city = res?.data?.data?.[0];

				if (!city) {
					console.error('Город не найден');
					return;
				}

				setCityName(city.name);
				setRestaurants(city.restaurants || city.attributes?.restaurants || []);
			} catch (error) {
				console.error('Ошибка при загрузке города и ресторанов:', error);
			}
		};

		fetchCityWithRestaurants();
	}, [cityId]);

	return (
		<div className={styles.cityPageContainer}>
			<div className={styles.cityPageHeader}>
				<h1 className={styles.cityPageTitle}>{cityName}</h1>
				<BackButton />
			</div>

			<YandexEdaLink />

			{restaurants.map((restaurant) => (
				<div className={styles.cityPageInfo} key={restaurant.id}>
					<h3 className={styles.cityPageRestaurantTitle}>{restaurant.name}</h3>
					<p>Адрес: {restaurant.address}</p>

					{/* Телефоны */}
					{restaurant.PhoneNumber && restaurant.PhoneNumber.length > 0 && (
						<>
							<p>
								{restaurant.PhoneNumber.length > 1
									? 'Телефоны для ронирования:'
									: 'Телефон для бронирования:'}
							</p>
							{restaurant.PhoneNumber.map((phoneObj) => (
								<p key={phoneObj.id}>
									<a className={styles.cityPagePhoneLink} href={`tel:${phoneObj.phones}`}>
										{phoneObj.phones}
										<PhoneIcon className={styles.cityPageIcon} />
									</a>
								</p>
							))}
						</>
					)}

					{restaurant.specialtyUrl && (
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
					)}

					{restaurant.menuUrl && (
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
					)}

					<div className={styles.cityPageSchedule}>
						<p>График работы:</p>
						<p className={styles.cityPageOpenHours}>{restaurant.openHours}</p>
					</div>

					{restaurant.businessLunch && <p>{restaurant.businessLunch}</p>}
				</div>
			))}
		</div>
	);
};

export default CityPage;
