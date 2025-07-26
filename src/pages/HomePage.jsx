import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
import perchiniMiniText from '../assets/img/perchini_mini_text.png';
import Header from '../components/Header';

import axios from 'axios';

const HomePage = () => {

	const [cities, setCities] = useState([]);

	useEffect(() => {
		axios.get(`https://willing-harmony-e53be7bef5.strapiapp.com/api/cities`)
			.then((res) => {
				const citiesData = res.data?.data?.map((item) => ({
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
