import React, { FC } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Header from '../../components/Header';
import { Container } from '../../styles/pages/Home';

const Contacts: FC = () => (
    <div>
        <Head>
            <title>Contacts</title>
        </Head>

        <main>
            <Header activeName="Contact" />
            <Container>
                <h1>Hello Contact</h1>
                <Link href="/">Go to Dash</Link>
            </Container>
        </main>

        <footer />
    </div>
);

export default Contacts;
