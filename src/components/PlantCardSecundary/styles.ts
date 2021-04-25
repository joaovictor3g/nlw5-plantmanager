import styled from 'styled-components/native';
import fonts from '../../styles/fonts';

export const Button = styled.Pressable<any>`
    background: ${props => props.theme.colors.shape};
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 1px;
    padding: 20px;  
    width: 100%;
    flex-direction: row;
`;

export const Text = styled.Text<any>`
    flex: 1;
    margin-left: 10px;
    color: ${props => props.theme.colors.textButton};
    font-family: ${fonts.heading};
    font-size: 17px;
`;


export const Details = styled.View`
    align-items: flex-end;
`;

export const TimeLabel = styled.Text<any>`
    margin-top: 5px;
    font-size: 16px;
    font-family: ${fonts.text};
    color: ${props => props.theme.colors.heading};
`;

export const Time = styled.Text<any>`
    margin-top: 5px;
    font-size: 16px;
    font-family:${fonts.heading};
    color: ${props => props.theme.colors.body_dark};
`;