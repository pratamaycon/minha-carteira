import React from 'react';

import ContentHeader from '../../components/ContentHeader';

import { Container } from './styles';

import SelectInput from '../../components/SelectInput';

const DashBorad: React.FC = () => {

    const options = [
        {value: 'Rodrigo', label: 'Rodrigo'},
        {value: 'Maria', label: 'Maria'},
        {value: 'Ana', label: 'Ana'},
    ]

    return(
        <Container>
            <ContentHeader title="Entradas" lineColor="#F7931B">
                <SelectInput options={options} />
            </ContentHeader>
        </Container>
    );
}

export default DashBorad;