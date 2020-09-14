import React, { FC } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Header from '../components/Header';
import { Container } from '../styles/pages/Home';

// interface HomeProps {
//     toggleTheme(): void;
// }

// const Home: FC<HomeProps> = ({ toggleTheme }) => (
const Home: FC = () => (
    <div>
        <Head>
            <title>Home Page</title>
        </Head>

        <main>
            <Header activeName="Home" />
            <Container>
                <h1>Hello</h1>
                <Link href="/projects">Hello Baby</Link>
            </Container>
        </main>

        <footer />
    </div>
);

export default Home;

/*
    <button
        type="button"
        onClick={() => {
            toggleTheme();
        }}
    >
        Troque o tema
    </button>
*/
