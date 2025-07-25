import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import HomePage from './pages/HomePage';
import CityPage from './pages/CityPage';
import Footer from './components/Footer';

const App = () => {

	const API_URL = import.meta.env.VITE_API_URL;;

	const [pageTitle, setPageTitle] = useState('');

	useEffect(() => {
		fetch(`https://willing-harmony-e53be7bef5.strapiapp.com/api/global`)
			.then((res) => res.json())
			.then((data) => {
				const title = data?.data?.siteName;
				if (title) setPageTitle(title);
			})
			.catch((err) => console.error('Ошибка при загрузке заголовка', err));
	}, []);

	useEffect(() => {
		if (pageTitle) {
			document.title = pageTitle;
		}
	}, [pageTitle]);

  useEffect(() => {
    fetch(`${API_URL}/api/global?populate=favicon`)
      .then(res => res.json())
      .then(data => {
        const faviconUrl = data?.data?.favicon?.url;

        if (faviconUrl) {
          const fullUrl = faviconUrl.startsWith('http')
            ? faviconUrl
            : `https://willing-harmony-e53be7bef5.strapiapp.com${faviconUrl}`;

          let link = document.querySelector("link[rel~='icon']");
          if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.head.appendChild(link);
          }
          link.href = fullUrl;
        }
      })
      .catch(err => console.error('Ошибка при загрузке favicon:', err));
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
