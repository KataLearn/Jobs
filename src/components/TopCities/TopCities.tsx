
import styles from './styles.module.scss';

export const TopCities = () => {


return(
    <div className={styles.TopCitiesInner}>
        <ul className={styles.topCitiesList}>
            <li className={styles.topCitiesItem}><a>Москва</a></li>
            <li className={styles.topCitiesItem}><a>Санкт-Петербург</a></li>
        </ul>
    </div>
)
}