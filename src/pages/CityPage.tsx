import { useParams, useNavigate, replace } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BackButton from '../components/BackButton';
import { Helmet } from 'react-helmet';
import styles from './CityPage.module.css';

import axios, { AxiosResponse } from 'axios';

import LinkIcon from '../components/LinkIcon';
import PhoneIcon from '../components/PhoneIcon';
import YandexEdaLink from '../components/YandexEdaLink';

import { ICity } from '../types/city';
import { IRestaurant } from '../types/restaurant';

const CityPage = () => {
	const API_URL: string = 'https://strapipro.ru';

	const navigate = useNavigate();

	const { cityId } = useParams();
	const [cityName, setCityName] = useState<string>('');
	const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);

	useEffect(() => {
		const fetchCityWithRestaurants = async () => {
			try {
				const res: AxiosResponse<{ data: ICity[] }> = await axios.get(
					`${API_URL}/api/cities?filters[foreignId]=${cityId}&populate[restaurants][populate]=PhoneNumber`
				);
				const city: ICity | undefined = res?.data?.data?.[0];

				if (!city) {
					navigate('/404', { replace: true });
					return;
				}

				setCityName(city.name);
				setRestaurants(city.restaurants || []);
			} catch (error) {
				console.error('Ошибка при загрузке города и ресторанов:', error);
			}
		};

		fetchCityWithRestaurants();
	}, [cityId]);

	return (
		<div className={styles.cityPageContainer}>
			{cityName && (
				<Helmet>
					<title>
						{restaurants.length > 1 ? 'Рестораны' : 'Ресторан'} Перчини в городе {cityName}
					</title>
					<meta
						name="description"
						content={`${
							restaurants.length > 1 ? 'Рестораны' : 'Ресторан'
						} Перчини в городе ${cityName}`}
					/>
				</Helmet>
			)}
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
					{restaurant.phoneNumber && restaurant.phoneNumber.length > 0 && (
						<>
							<p>
								{restaurant.phoneNumber.length > 1
									? 'Телефоны для ронирования:'
									: 'Телефон для бронирования:'}
							</p>
							{restaurant.phoneNumber.map((phoneObj) => (
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
