import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
	const location = useLocation();

	return (
		<footer className={styles.footerContainer}>
			<nav className={styles.footerNav}>
				<ul className={styles.footerSocialLinks}>
					{location.pathname !== '/' && (
						<li>
							<Link to="/">На главную</Link>
						</li>
					)}
					<li>
						<Link to="https://perchini.ru/" target="_blank">
							Наш сайт
						</Link>
					</li>
					<li>
						<a href="https://vk.com/perchini_russia" target="_blank" rel="noopener noreferrer">
							ВКонтакте
						</a>
					</li>
					<li>
						<a href="https://t.me/perchini_official" target="_blank" rel="noopener noreferrer">
							Telegram
						</a>
					</li>
				</ul>
			</nav>
			<p>© 2025 Перчини. Копирование материалов только с разрешения правообладателя.</p>
		</footer>
	);
};

export default Footer;
