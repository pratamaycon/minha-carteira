import React from 'react';

import { Container, TitleContainer, Controllers } from './styles'
import SelectInput from '../../components/SelectInput';

const ContentHeader: React.FC = () => {
    return(
        <Container>
            <TitleContainer>
                <h1>Titulo</h1>
            </TitleContainer>
            <Controllers>
                <SelectInput />
            </Controllers>
        </Container>
    );
}

export default ContentHeader;