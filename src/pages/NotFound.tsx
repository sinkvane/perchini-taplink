import { FC } from 'react';
import styles from './PageNotFound.module.css';

const PageNotFound: FC = () => {
	return (
		<div className={styles.pageNotFoundContainer}>
			<div className={styles.pageNotFoundHeader}>
				<span className={styles.pageNotFoundNubmer}>404</span>
			</div>
			<h1 className={styles.pageNotFoundTitle}>
				Похоже, <br/>данной страницы не существует
			</h1>
		</div>
	);
};

export default PageNotFound;
