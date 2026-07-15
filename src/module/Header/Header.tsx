import { Container,NavLink, AppShell, Flex } from '@mantine/core';
import { Logo } from '../../ui/Logo/Logo';
import { DefaultAvatar } from '../../ui/Avatar/Avatar';
import styles from './styles.module.scss';

export const Header = () => {

    return (
        <AppShell withBorder={false} >
            <AppShell.Header className={styles.header}>
                <Container className={styles.inner} size={1440}
                    w="100%"
                    px="md">
                    <Flex w="100%">
                        <NavLink href="#" label={<Logo />} className={styles.logo} />
                        <Flex w="100%">
                            <NavLink label='Вакансии FE' className={styles.vacationLink} />
                            <NavLink label='Обо мне' leftSection={<DefaultAvatar />} className={styles.aboutMe} />
                        </Flex>
                    </Flex>
                </Container>
            </AppShell.Header>
        </AppShell>


    )
}