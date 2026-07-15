import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { fetchVacancies } from './VacanciesThunk';


type FiltersState = {
    search: string;
    city: string;
    tags: string[];

}

type JobsState = {
    items: any[];
    isLoading: boolean;
    error: string | null;
    allCities: string[];
    filters: FiltersState;
}

const initialState: JobsState = {
    items: [],
    isLoading: false,
    error: null,
    allCities: [],
    filters: {
        search: '',
        city: '',
        tags: ['JavaScript', 'React', 'Redux', 'Python']
    },
};

const vacanciesSlice = createSlice({
    name: 'vacancies',
    initialState,
    reducers: {
        setSearch(state, action: PayloadAction<string>) {
            state.filters.search = action.payload
        },
        setCity(state, action: PayloadAction<string>) {
            state.filters.city = action.payload
        },

        addTags(state, action: PayloadAction<string>) {
            const tag = action.payload;
            if (!state.filters.tags.includes(tag)) {
                state.filters.tags.push(tag);
            }
        },
        deleteTags(state, action: PayloadAction<string>) {
            const tag = action.payload;
            state.filters.tags = state.filters.tags.filter((item) => item !== tag)
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchVacancies.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchVacancies.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items = action.payload;
                if (state.allCities.length === 0) {
                    const cities: string[] = [];
                    action.payload.forEach((item: any) => {
                        if (item.city && !cities.includes(item.city)) {
                            cities.push(item.city);
                        }
                    });
                    state.allCities = cities; 
                }
            })
            .addCase(fetchVacancies.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    }
})

export const { setSearch, setCity, addTags, deleteTags } = vacanciesSlice.actions
export default vacanciesSlice.reducer;




// toggleCity(state, action: PayloadAction<string>) {
//     const city = action.payload;
//     const index = state.filters.cities.indexOf(city);
//     if (index === -1) {
//         state.filters.cities.push(city);
//     } else {
//         state.filters.cities.splice(index, 1);
//     }
// },
// toggleTags(state, action: PayloadAction<string>) {
//     const tag = action.payload;
//     const index = state.filters.tags.indexOf(tag);
//     if (index === -1) {
//         state.filters.tags.push(tag);
//     } else {
//         state.filters.tags.splice(index, 1);
//     }
// },