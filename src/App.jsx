import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import HomePage from './pages/HomePage';
import CityPage from './pages/CityPage';
import Footer from './components/Footer';

import axios from 'axios';

const App = () => {
	const API_URL = 'https://strapipro.ru';

	const [pageTitle, setPageTitle] = useState('');

	useEffect(() => {
		const getTitle = async () => {
			try {
				const res = await axios.get(`${API_URL}/api/global`);
				const title = res?.data?.data?.siteName;
				if (title) setPageTitle(title);
			} catch (err) {
				console.error('Ошибка при загрузке заголовка:', err);
			}
		};
		getTitle();
	}, []);

	useEffect(() => {
		if (pageTitle) {
			document.title = pageTitle;
		}
	}, [pageTitle]);

	useEffect(() => {
		const getFavicon = async () => {
			try {
				const res = await axios.get(`${API_URL}/api/global?populate=favicon`);
				const faviconUrl = res?.data?.data?.favicon?.url;
				if (faviconUrl) {
					const fullUrl = faviconUrl.startsWith('http') ? faviconUrl : `${API_URL}${faviconUrl}`;

					let link = document.querySelector("link[rel~='icon']");
					if (!link) {
						link = document.createElement('link');
						link.rel = 'icon';
						document.head.appendChild(link);
					}
					link.href = fullUrl;
				}
			} catch (err) {
				console.error('Ошибка загузки favicon:', err);
			}
		};
		getFavicon();
	}, []);

	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/city/:cityId" element={<CityPage />} />
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
			<Footer></Footer>
		</Router>
	);
};

export default App;
