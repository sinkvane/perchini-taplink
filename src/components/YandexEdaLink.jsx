import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../pages/CityPage.module.css';
import '../index.css';

import DeliveryIcon from '../components/DeliveryIcon';

const YandexEdaLink = () => {
	const { cityId } = useParams(); // Это и есть factId
	const [deliveryLink, setDeliveryLink] = useState(null);
	const [cityName, setCityName] = useState('');

	useEffect(() => {
		fetch(`https://willing-harmony-e53be7bef5.strapiapp.com/api/cities?filters[factId][$eq]=${cityId}`)
			.then((res) => res.json())
			.then((data) => {
				const city = data?.data?.[0];
				if (city) {
					setCityName(city.name || city.attributes?.name);
					const delivery = city.delivery || city.attributes?.delivery;
					if (delivery) {
						setDeliveryLink(delivery);
					}
				}
			})
			.catch((err) => {
				console.error('Ошибка при загрузке доставки:', err);
			});
	}, [cityId]);

	if (!deliveryLink) return null;

	return (
		<a
			className={styles.cityPageLinks}
			href={deliveryLink}
			target="_blank"
			rel="noopener noreferrer"
		>
			Доставка в городе {cityName}
			<DeliveryIcon className={[styles.cityPageIcon, styles.width20px].join(' ')} />
		</a>
	);
};

export default YandexEdaLink;
