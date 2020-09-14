import React, { FC } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';

import GlobalStyle from '../styles/global';

// import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
    const darkMode = useDarkMode(false);
    // darkMode.value === true ? : light
    return (
        <ThemeProvider theme={dark}>
            <Component {...pageProps} toggleTheme={darkMode.toggle} />
            <GlobalStyle />
        </ThemeProvider>
    );
};

export default MyApp;
