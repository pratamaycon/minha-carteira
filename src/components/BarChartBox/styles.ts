import styled from 'styled-components';

interface ILegendProps {
    color: string
}

export const Container = styled.div`
    width: 48%;
    min-height: 260px;

    font-size: 14px;

    margin: 10px 0;

    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

    border-radius: 7px;

    display: flex;
`;

export const SideLeft = styled.aside`
    flex: 1;
    padding: 30px 20px;

    > h2 {
        padding-left: 16px;
        margin-bottom: 10px;
    }
`;

export const LegendContainer = styled.ul`
    list-style: none;

    height: 170px;
    padding-right: 15px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.secondary};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${props => props.theme.colors.tertiary};
    border-radius: 10px;
  }
`;

export const Legend = styled.li<ILegendProps>`
    display: flex;  
    align-items: center;

    position: relative;
    top: 20%;

    margin-bottom: 7px;

    padding-left: 16px;
    
    > div {
        background-color: ${props => props.color};

        width: 50px;
        height: 50px;
        border-radius: 6px;

        font-size: 16px;
        text-align: center;
        line-height: 48px;
    }

    > span {
        margin-left: 5px;
    }
`;

export const SideRight = styled.main`
    flex: 1;
    min-height: 120px;

    position: relative;
    bottom: 8%;

    display: flex;
    justify-content: center;

    padding-top: 35px;
`;