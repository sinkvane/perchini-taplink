import { Link } from 'react-router-dom';
import data from '../data/restaurants.json';
import styles from './HomePage.module.css';
import perchiniMiniText from '../assets/img/perchini_mini_text.png';
import Header from '../components/Header';
import { Helmet } from 'react-helmet';

const HomePage = () => {
	const cities = data.cities.map((city) => (
		<div key={city.id}>
			<Link className={styles.homePageLink} to={`/city/${city.id}`}>
				<span>{city.name}</span>
			</Link>
		</div>
	));

	return (
		<div className={styles.homePageContainer}>
			<Helmet>
				<title>Выберите свой город - Перчини</title>
				<meta
					name="description"
					content="Выберите город с рестораном Перчини. Перчини Итальянский Ресторан."
				/>
			</Helmet>
			<div className={styles.homePagePhotoContainer}>
				<img src={perchiniMiniText} alt="В перчини есть!" />
			</div>
			<div className={styles.homePageContent}>
				<Header />
				<h2 className={styles.homePageText}>Выберите город</h2>
				{cities}
			</div>
		</div>
	);
};

export default HomePage;
