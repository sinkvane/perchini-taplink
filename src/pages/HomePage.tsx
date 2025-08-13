import { useEffect, useState, FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
import perchiniMiniText from '../assets/img/perchini_mini_text.png';
import Header from '../components/Header';
import { Helmet } from 'react-helmet';

import axios, { AxiosResponse } from 'axios';
import { ICity } from '../types/city';

const HomePage: FC = () => {
	const API_URL: string = 'https://strapipro.ru';

	const [cities, setCities] = useState<ICity[]>([]);

	useEffect(() => {
		const getCities = async (): Promise<void> => {
			try {
				const res: AxiosResponse<{ data: ICity[] }> = await axios.get(`${API_URL}/api/cities`);
				const citiesData: ICity[] = res?.data?.data
					?.map((item: ICity) => ({
						foreignId: item.foreignId,
						name: item.name,
					}))
					.sort((a, b) => a.foreignId - b.foreignId);
				setCities(citiesData);
			} catch (err) {
				console.error('Ошибка загрузки городов:', err);
			}
		};
		getCities();
	}, []);

	return (
		<div className={styles.homePageContainer}>
			{cities.length > 0 && (
				<Helmet>
					<title>Выберите свой город - Перчини</title>
					<meta
						name="description"
						content="Выберите город с рестораном Перчини. Перчини Итальянский Ресторан."
					/>
				</Helmet>
			)}
			<div className={styles.homePagePhotoContainer}>
				<img src={perchiniMiniText} alt="В перчини есть!" />
			</div>
			<div className={styles.homePageContent}>
				<Header />
				<h2 className={styles.homePageText}>Выберите город</h2>
				{cities.map((city) => {
					return (
						<div key={city.foreignId}>
							<Link className={styles.homePageLink} to={`/city/${city.foreignId}`}>
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
