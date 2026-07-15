import { Header } from "../../module/Header/Header"
import { SearchVacancies } from "../../module/SearchVacancies/SearchVacancies"
import { Aside } from "../../module/Aside/Aside"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVacancies } from '../../reducers/VacanciesThunk';
import type { RootState, AppDispatch } from '../../store/store';
import { JobsCards } from "../../module/JobsCards/JobsCards";
import { Flex } from '@mantine/core'
import styles from './styles.module.scss';


export const Jobs = () => {
    const dispatch = useDispatch<AppDispatch>();
    const filters = useSelector((state: RootState) => state.vacancies.filters);
    

    useEffect(() => {
        dispatch(fetchVacancies(filters));
    }, [dispatch, filters]);

    return (
        <>
            <Header />
            <SearchVacancies />
            <Flex
                justify="center"
                gap='24px'
                direction="row"
                wrap="nowrap"
                className={styles.flex}>
                    
                <Aside />
                <JobsCards />
            </Flex>

        </>

    )
}