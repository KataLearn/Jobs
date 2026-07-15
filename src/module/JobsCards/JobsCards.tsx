import { useSelector, } from "react-redux"
import { useState } from "react";
import type { RootState, } from '../../store/store';
import { Skeleton, LoadingOverlay, Container, Pagination } from '@mantine/core'
import styles from './styles.module.scss';
import { CardJob } from "../../components/Card/CardJob";
import { TopCities } from "../../components/TopCities/TopCities";

export const JobsCards = () => {
    const { isLoading, items } = useSelector((state: RootState) => state.vacancies)
    const [page, setPage] = useState(1);
    const limit = 10;

    const totalPages = items ? Math.ceil(items.length / limit) : 1;

    return (
        <Container className={styles.innerJob}>
            <TopCities/>
            <ul className={styles.cards}>
                {isLoading ? (
                    [...Array(limit)].map((_, index) => (
                        <Skeleton visible={true} height={414} width={302} key={index} className={styles.skeleton} >
                            <LoadingOverlay
                                visible
                                className={styles.loader}
                                zIndex={1000}
                                overlayProps={{ radius: 'sm', blur: 2 }}
                                loaderProps={{ color: '#CED4DA', type: 'bars' }}
                            />
                        </Skeleton>
                    ))
                ) : (
                    items?.map((job) => (
                        <CardJob job={job} key={job.id} />
                    ))
                )}
            </ul>
           
                <Pagination
                    value={page}
                    total={totalPages}
                    onChange={setPage}
                    color="gray"
                    className={styles.pagination}
                />
       
        </Container>
    )
}