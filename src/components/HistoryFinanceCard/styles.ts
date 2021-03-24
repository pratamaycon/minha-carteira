import styled from 'styled-components';


interface ITagProps {
    color: string;
}

export const Container = styled.li`
    background-color: ${props => props.theme.colors.tertiary};
    
    list-style: none;
    border-radius: 5px;

    margin: 10px 0;
    padding: 12px 10px;

    display: flex;
    justify-content:space-between;
    align-items: center;

    cursor: pointer;
    transition: all .3s;

    position: relative;

    &:hover{
        opacity: .7;
        transform: translateX(10px)
    } 

    > div * {
        font-size: 14px;
        font-weight: normal;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        padding-left: 10px;
    }

    > h3 {
        font-size: 18px;
        font-weight: 500;
    }
`;

export const Tag = styled.div<ITagProps>`
    width: 10px;
    height:60%;

    background-color: ${props => props.color};

    position: absolute;
    left: 0;
`;