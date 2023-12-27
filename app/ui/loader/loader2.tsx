import styles from './loader2.module.css';

function Loader2() {
	return (
		<div className={styles.loader}>
			<div className={styles.circle}>
				<div className={styles.dot}></div>
				<div className={styles.outline}></div>
			</div>
			<div className={styles.circle}>
				<div className={styles.dot}></div>
				<div className={styles.outline}></div>
			</div>
			<div className={styles.circle}>
				<div className={styles.dot}></div>
				<div className={styles.outline}></div>
			</div>
			<div className={styles.circle}>
				<div className={styles.dot}></div>
				<div className={styles.outline}></div>
			</div>
		</div>
	);
}
export default Loader2;
