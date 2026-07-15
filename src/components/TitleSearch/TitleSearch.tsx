import {  Group, Title, Text } from "@mantine/core"
import styles from './styles.module.scss';

export const TitleSearch = () => {
    return (
        <Group className={styles.titleSearchInner}>
            <Title order={1} className={styles.searchTitle}>Список вакансий</Title>
            <Text className={styles.searchText}>по профессии Frontend-разработчик</Text>
        </Group>
    )
}