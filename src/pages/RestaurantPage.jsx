import { useParams } from 'react-router-dom';
import data from '../data/restaurants.json';
import BackButton from '../components/BackButton';
import styles from './RestaurantPage.module.css';
import PhoneIcon from '../components/PhoneIcon';

const RestaurantPage = () => {
	const { restaurantId } = useParams();
	const restaurantData = data.cities
		.reduce((acc, city) => acc.concat(city.restaurants), [])
		.find((restaurant) => restaurant.id === parseInt(restaurantId));

	const renderPhones = (phones) => {
		let label = phones.length > 1 ? 'Телефоны для бронирования:' : 'Телефон для бронирования:';

		return (
			<>
				<p>{label}</p>
				{phones.map((phone) => (
					<p key={phone}>
						<a className={styles.restaurantPagePhoneLink} href={`tel:${phone}`}>{phone}
						<PhoneIcon className={styles.restaurantPageIcon} />
						</a>
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
