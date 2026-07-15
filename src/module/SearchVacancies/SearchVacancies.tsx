import { Container } from "@mantine/core"
import { TitleSearch } from "../../components/TitleSearch/TitleSearch";
import { Search } from "../../components/Search/Search";
import styles from './styles.module.scss';

export const SearchVacancies = () => {
    return (
        <div className={styles.vacationInner}>
            <Container className={styles.vacationFlex}>
                <TitleSearch />
                <Search />
            </Container>
        </div>
    )
}