import React from 'react';

import { Container } from './styles'

const BarChartBox: React.FC = ({children}) => {
    return(
        <Container>
            <h1>{children}</h1>
        </Container>
    );
}

export default BarChartBox;