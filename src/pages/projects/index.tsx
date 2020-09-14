import React, { FC } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Header from '../../components/Header';
import { Container } from '../../styles/pages/Home';

const Projects: FC = () => (
    <div>
        <Head>
            <title>Projects</title>
        </Head>

        <main>
            <Header activeName="Projects" />
            <Container>
                <h1>Hello World</h1>
                <Link href="/">Go to Dash</Link>
            </Container>
        </main>

        <footer />
    </div>
);

export default Projects;
