import { useParams } from 'react-router-dom';
import styles from '../pages/CityPage.module.css';
import data from '../data/restaurants.json';

const YandexEdaLink = () => {

	const { cityId } = useParams();
  const cityData = data.cities.find((city) => city.id === parseInt(cityId));
  
	return (
		<>
			{cityData.yandexEda && (
				<a
					className={styles.cityPageLinks}
					href={cityData.yandexEda}
					target="_blank"
					rel="noopener noreferrer"
				>
					Доставка в городе {cityData.name}
				</a>
			)}
		</>
	);
};

export default YandexEdaLink;
