import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => (
	<footer className={styles.footerContainer}>
		<nav className={styles.footerNav}>
			<ul className={styles.footerSocialLinks}>
				<li>
					<Link to="/">Главная</Link>
				</li>
				<li>
					<a href="https://vk.com/perchini_russia" target="_blank" rel="noopener noreferrer">
						ВК
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

export default Footer;
