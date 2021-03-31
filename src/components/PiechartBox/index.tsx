import React from 'react';
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
} from 'recharts';

import { Container, SideLeft, LegendContainer, Legend, SideRight } from './styles'

interface IPiechartBoxProps {
    data: {
        name: string;
        value: number;
        percent: number;
        color: string;
    }[];
}

const PiechartBox: React.FC<IPiechartBoxProps> = ({ data }) => (
        <Container>
            <SideLeft>
                <h2>Relação</h2>
                <LegendContainer>
                    {
                        data.map(indicator => (
                            <Legend key={indicator.name} color={indicator.color}>
                                <div>{indicator.percent}%</div>
                                <span>{indicator.name}</span>
                            </Legend>
                        ))
                    }
                </LegendContainer>
            </SideLeft>

            <SideRight>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie data={data} dataKey="value">
                            {
                                data.map(indicator => (
                                    <Cell key={indicator.name} fill={indicator.color} />
                                ))
                            }
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </SideRight>
        </Container>
);


export default PiechartBox;