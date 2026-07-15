import { Card, Text, Title, Flex } from '@mantine/core';
import styles from './styles.module.scss';
import { ButtonSearch } from '../../ui/ButtonSearch/ButtonSearch';



type Job = {
    job: {
        name: string;
        salary: string;
        experience: string;
        space: 'office' | 'hybrid' | 'remote'; 
        company_name: string;
    }
}

export const CardJob = ({ job }: Job) => {
    const { name, salary, experience, space, company_name } = job

    const spaceConfig = {
        office: { text: 'Офис', className: styles.office },
        hybrid: { text: 'Гибрид', className: styles.gibrid },
        remote: { text: 'Можно удаленно', className: styles.remote },
    };
    const currentSpace = spaceConfig[space]

    const formatted = Number(salary).toLocaleString('ru-RU');

    return (
        <Card className={styles.card} shadow="sm" padding="lg" withBorder>
            <Title className={styles.titleJobs} order={4}>{name}</Title>
            <Flex className={styles.cardSalary}>
                <Text className={styles.salary}>{formatted} ₽</Text>
                <Text className={styles.experience}>{experience}</Text>
            </Flex>
            <Text className={styles.company}>{company_name}</Text>
            <div className={currentSpace.className}>
                {currentSpace.text.toUpperCase()}
            </div>
            <ButtonSearch title='Смотреть вакансию' onClick={() => { }} className={styles.BtnJobs} />

        </Card>
    )
}