import React, { FC } from 'react';

import { Container } from './styles';

const Logo: FC = () => {
    return (
        <Container>
            <h1 className="first">Lucas</h1>
            <h1 className="second">Vanni</h1>
        </Container>
    );
};

export default Logo;
