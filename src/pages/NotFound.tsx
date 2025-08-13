import { FC } from 'react';
import styles from './PageNotFound.module.css';
import { Helmet } from 'react-helmet';

const PageNotFound: FC = () => {
	return (
		<div className={styles.pageNotFoundContainer}>
			<Helmet>
				<title>404 | Перчини</title>
				<meta name="robots" content="noindex, follow" />
			</Helmet>
			<div className={styles.pageNotFoundHeader}>
				<span className={styles.pageNotFoundNubmer}>404</span>
			</div>
			<h1 className={styles.pageNotFoundTitle}>
				Похоже, <br />
				данной страницы не существует
			</h1>
		</div>
	);
};

export default PageNotFound;
