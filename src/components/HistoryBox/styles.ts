import styled  from 'styled-components';

interface ILegendProps {
    color: string
}

export const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    font-size: 14px;
    font-weight: normal;

    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

    margin: 10px 0;
    padding: 30px 20px;

    border-radius: 7px;
`;

export const ChartContainer = styled.div`
    height: 360px;
    flex: 1;
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    > h2 {
        margin-bottom: 20px;
        padding-left: 16px;
    }
`;

export const LegendContainer = styled.ul`
    list-style: none;

    display: flex;
    padding-right: 16px;

`; 

export const  Legend  = styled.li<ILegendProps>`
    display: flex;
    align-items: center;

    margin-bottom: 7px;
    margin-left: 16px;

    
    > div {
        background-color: ${props => props.color};

        width: 45px;
        height: 45px;
        border-radius: 6px;

        font-size: 16px;
        text-align: center;
        line-height: 40px;
    }

    > span {
        margin-left: 5px;
    }
`;