import styled from 'styled-components/native';
import fonts from '../../styles/fonts';

export const Container = styled.SafeAreaView<any>`
    flex: 1;
    background: ${props => props.theme.colors.background};
    align-items: center;
    justify-content:center;
    width: 100%;
`;

export const Content = styled.View`
    width: 100%;
    align-items: center;
    padding: 20px;
`;

export const Title = styled.Text<any>`
    font-size: 28px;    
    color: ${props => props.theme.colors.heading};
    font-family: ${fonts.heading};
    margin-top: 20px;
`;

export const Text = styled.Text<any>`
    color: ${props => props.theme.colors.heading};
    font-size: 17px;
    margin-top: 20px;
    line-height: 28px;
    text-align: center;
    font-family: ${fonts.text};

`;

export const Image = styled.Image`

`;