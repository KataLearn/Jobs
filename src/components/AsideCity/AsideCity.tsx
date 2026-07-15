
import { Select } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../store/store';
import { setCity } from '../../reducers/VacanciesSlice';
import { GeoTag } from '../../ui/GeoTag/Geotag';
import styles from './styles.module.scss';

export const AsideCity = () => {
    const dispatch = useDispatch<AppDispatch>();
    
    const { allCities, filters } = useSelector((state: RootState) => state.vacancies);
    const selectedCity = filters.city;
     const sortedCities = [...allCities].sort((a, b) => a.localeCompare(b, 'ru'));
     const selectData = [
        { value: '', label: 'Все города' },
        ...sortedCities.map((city) => ({ value: city, label: city }))
    ];

    const handleCityChange = (value: string | null) => {
        dispatch(setCity(value || ''));
    };

    return (
        <div className={styles.selectWrapper}>
            <Select 
            placeholder="Выберите город"
            data={selectData} 
            value={selectedCity} 
            onChange={handleCityChange} 
            allowDeselect={false} 
            className={styles.selectInput}
            leftSection={<GeoTag/>}
        />
        </div>
        
    );
};
