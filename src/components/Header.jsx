import React from 'react';
// import Logo from '../assets/img/perchini_logo.png';
import styles from './Header.module.css';

const Header = () => (
	<header className={styles.header}>
		<h2 className={styles.headerText}>Кухня Перчини сочетает в себе традиционные рецепты, современные гастрономические тренды, авторские блюда по мотивам итальянской классики и популярные хиты Италии.</h2>
		{/* <img className={styles.headerLogo} src={Logo} alt="Логотип Перчини" /> */}
	</header>
);

export default Header;
