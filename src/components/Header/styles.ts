import styled from 'styled-components/native';
import fonts from '../../styles/fonts';

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    margin-top: 20px;
 
`;

export const Greeting = styled.View`
`;

export const TextContainer = styled.Text<any>`
    font-size: 32px;
    color: ${props => props.theme.colors.heading};
    font-family: ${fonts.text};
`;

export const ImageProfile = styled.Image`
    width: 56px;
    height: 56px;

    border-radius: 100px;

`;

export const UserName = styled.Text<any>`
    font-size: 32px;
    font-family: ${fonts.heading};
    color: ${props => props.theme.colors.heading};
    line-height: 40px;
`;
