import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
import perchiniMiniText from '../assets/img/perchini_mini_text.png';
import Header from '../components/Header';

const HomePage = () => {

	// const API_URL = import.meta.env.VITE_API_URL;

	const [cities, setCities] = useState([]);

	useEffect(() => {
		fetch(`https://willing-harmony-e53be7bef5.strapiapp.com/api/cities`)
			.then((res) => res.json())
			.then((data) => {
				const citiesData = data?.data?.map((item) => ({
					id: item.factId,
					name: item.name,
				}))
					.sort((a, b) => a.id - b.id);
				setCities(citiesData);
			})
			.catch((err) => {
				console.error('Ошибка при загрузке городов', err);
			});
	}, []);

	return (
		<div className={styles.homePageContainer}>
			<div className={styles.homePagePhotoContainer}>
				<img src={perchiniMiniText} alt="В перчини есть!" />
			</div>
			<div className={styles.homePageContent}>
				<Header />
				<h2 className={styles.homePageText}>Выберите город</h2>
				{cities.map((city) => {
					return (
						<div key={city.id}>
							<Link className={styles.homePageLink} to={`/city/${city.id}`}>
								<span>{city.name}</span>
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default HomePage;
