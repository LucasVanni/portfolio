import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { Container, Nav, ContainerButtons } from './styles';

import GitHubSVG from '../../assets/Github.svg';
import LinkedInSVG from '../../assets/LinkedIn.svg';
import ArrowLeft from '../../assets/arrowLeft.svg';
import ArrowRight from '../../assets/arrowRight.svg';

import Logo from '../Logo';

interface HeaderProps {
    activeName?: string;
}

const Header: React.FC<HeaderProps> = ({ activeName }) => {
    const [activeHome, setActiveHome] = useState('');
    const [activeProject, setActiveProject] = useState('');
    const [activeContacts, setActiveContacts] = useState('');

    useEffect(() => {
        switch (activeName) {
            case 'Home':
                setActiveHome('activeHome');
                break;

            case 'Projects':
                setActiveProject('activeProject');
                break;
            case 'Contact':
                setActiveContacts('activeContacts');
                break;

            default:
                break;
        }
    }, [activeName]);

    return (
        <Container>
            <Logo />

            <Nav>
                <ul>
                    <Link href="/">
                        <li className={activeHome}>
                            <ArrowLeft />
                            Home
                            <ArrowRight />
                        </li>
                    </Link>
                    <Link href="/projects">
                        <li className={activeProject}>
                            <ArrowLeft />
                            Projects
                            <ArrowRight />
                        </li>
                    </Link>
                    <Link href="/contact">
                        <li className={activeContacts}>
                            <ArrowLeft />
                            Contact
                            <ArrowRight />
                        </li>
                    </Link>
                </ul>
            </Nav>
            <ContainerButtons>
                <a href="https://www.linkedin.com/in/lucas-vanni/">
                    <LinkedInSVG />
                </a>

                <a href="https://github.com/LucasVanni/">
                    <GitHubSVG />
                </a>
            </ContainerButtons>
        </Container>
    );
};

export default Header;
