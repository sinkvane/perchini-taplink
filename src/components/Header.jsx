import React from 'react';
import Logo from '../assets/img/perchini_logo.png';
import styles from './Header.module.css';

const Header = () => (
	<header>
		<img className={styles.headerLogo} src={Logo} alt="Логотип Перчини" />
	</header>
);

export default Header;
