import React from 'react';

import { Container } from './styles';

const SelectInput: React.FC = ( {children} ) => {
    return(
        <Container>
            <select>
                <option value="a">a</option>
                <option value="b">b</option>
                <option value="c">c</option>
            </select>
        </Container>
    );
}

export default SelectInput;