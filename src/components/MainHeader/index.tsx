
import React, { useMemo, useState } from 'react';

import { Container, Profile, Welcome, Username } from './styles'

import { useTheme } from '../../hooks/theme';

import Toggle from '../Toggle';
import emojis from '../../utils/emojis';

const MainHeader: React.FC = () => {
    const { toggleTheme, theme } = useTheme();

    const [ darkTheme, setDarkTheme] = useState(() => {
       return theme.title === 'dark' ? true: false;
    })

    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * emojis.length)
        return emojis[indice];
    }, []);

    const handleChangeTheme = () => {
        setDarkTheme(!darkTheme);
        toggleTheme();
    };

    return(
        <Container>
            <Toggle 
                labelLeft="Light"
                labelRight="Dark"
                checked={darkTheme}
                onChange={handleChangeTheme}
            />

            <Profile>
                <Welcome>Olá, {emoji}</Welcome>
                <Username>Maycon Prata</Username>
            </Profile>
        </Container>
    );
}

export default MainHeader;