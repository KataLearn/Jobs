import { Container, Group, Text,  } from "@mantine/core"
import { Input } from "../../ui/Input/Input";
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../store/store';
import { addTags, deleteTags } from '../../reducers/VacanciesSlice';
import { ButtonSearch } from "../../ui/ButtonSearch/ButtonSearch";
import { useState } from "react";
import { PillsTag } from "../PillsTag/PillsTag";
import styles from './styles.module.scss';


export const SearchTags = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [value, setValue] = useState('')
    const { tags } = useSelector((state: RootState) => state.vacancies.filters)

    const handleСhooseSkills = () => {
        const trimmed = value.trim();
         if (!trimmed) return;
        const tagsText = trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase()
        dispatch(addTags(tagsText));
        setValue('');
    };
    const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            handleСhooseSkills()
        }
    }
    const handleDeleteSkills = (tag: string) => {
        dispatch(deleteTags(tag))
    }


    return (
        <Container className={styles.searchTagInner}>
            <Text className={styles.tagTitle}>Ключевые навыки</Text>
            <Group className={styles.groupInput}>
                <Input placeholder="Навык" name="search skills" value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} className={styles.tagsInput} onKeyDown={handleKeyDown}/>
                <ButtonSearch title="+" onClick={handleСhooseSkills} className={styles.btnSearch}/>
            </Group>
            <Group className={styles.groupPills}>
                {tags.map((tag) => (
                    <PillsTag tag = {tag} key={tag} onClick={() => handleDeleteSkills(tag)}/>
                ))}
            </Group>
        </Container>
    )
}