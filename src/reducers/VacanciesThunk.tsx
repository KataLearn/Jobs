import { createAsyncThunk } from "@reduxjs/toolkit";
import ky from 'ky';

type FetchVacanciesParam = {
    search: string;
    city: string;
    tags: string[];
}


export const fetchVacancies = createAsyncThunk<any[], FetchVacanciesParam, { rejectValue: string }>(
    'vacancies/fetchVacancies',
    async (filters: FetchVacanciesParam, { rejectWithValue }) => {

        try {
            const { search, city, tags } = filters;
            const params = new URLSearchParams();
            if (search.trim()) {
                params.append('search', search.trim());
            }

            if (city) params.append('city', city);

            if (tags.length > 0) {
                params.append('skills', tags.join(','));
            }


            const response = await ky.get('https://kata-jobs.onrender.com/api/jobs', {
                searchParams: params
            });
            const data: any = await response.json();
            return data.jobs
        } catch (error: any) {
            return rejectWithValue(error.message || 'Ошибка загрузки');
        }
    }
)