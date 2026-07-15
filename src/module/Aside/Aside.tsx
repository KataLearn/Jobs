import { AsideCity } from "../../components/AsideCity/AsideCity"
import { SearchTags } from "../../components/SearchTags/SearchTags"
import styles from './styles.module.scss';

export const Aside = () => {
    return (
        <div className={styles.aside}>
            <SearchTags />
            <AsideCity />
        </div>

    )
}