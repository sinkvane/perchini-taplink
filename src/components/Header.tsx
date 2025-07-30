import styles from './Header.module.css';

const Header = () => (
	<header className={styles.header}>
		<h2 className={styles.headerText}>
			Кухня Перчини сочетает в себе традиционные рецепты, современные гастрономические тренды, авторские
			блюда по мотивам итальянской классики и популярные хиты Италии.
		</h2>
	</header>
);

export default Header;
