import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../store/store';
import { ButtonSearch } from "../../ui/ButtonSearch/ButtonSearch";
import { Input } from "../../ui/Input/Input"
import { withSearchIcon } from "../../hocs/withSearchIconHoc";
import { fetchVacancies } from '../../reducers/VacanciesThunk';
import { setSearch } from '../../reducers/VacanciesSlice';
import { useState } from 'react';
import styles from './styles.module.scss';



const SearchInputWithIcon = withSearchIcon(Input);

export const Search = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [localSearch, setLocalSearch] = useState('');
    const { city,tags } = useSelector((state: RootState) => state.vacancies.filters);
   
    const handleSearchClick = () => {
        dispatch(setSearch(localSearch));
        dispatch(fetchVacancies({ search: localSearch, city, tags }));
        setLocalSearch('');
    };
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            handleSearchClick()
        }
    }


    return (
        <div className={styles.searchInner}>
        <SearchInputWithIcon
            placeholder="Должность или название компании"
            onChange={(e) => setLocalSearch(e.target.value)}
            name="search"
            value={localSearch}
            className={styles.searchHeight42} 
            onKeyDown={handleKeyDown}
        />
        <ButtonSearch title='Найти' onClick={handleSearchClick} className = {styles.searchButton}/>
    </div>
    )
}