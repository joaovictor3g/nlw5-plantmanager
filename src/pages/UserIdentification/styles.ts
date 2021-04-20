import styled from 'styled-components/native';
import fonts from '../../styles/fonts';

export const Container = styled.SafeAreaView<any>`
    flex: 1;
    width: 100%;
    background: ${props => props.theme.colors.background};
    align-items: center;
`;

export const Content = styled.View`
    padding: 32px;
    flex: 1;
    width: 100%;
`;

export const Form = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Text = styled.Text<any>`
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    color: ${props => props.theme.colors.heading};
    font-family: ${fonts.heading};   
    margin-top: 20px; 
`;

export const Image = styled.Image`
    width: 50px;
    height: 50px;
`;

export const Input = styled.TextInput<any>`
    border-bottom-width: 1px;
    border-color: ${props => props.focus ? props.theme.colors.green: props.theme.colors.body};
    width: 100%;
    font-size: 18px;
    margin-top: 50px;
    padding: 10px;
    text-align: center;
    font-family: ${fonts.text};
`;

export const KeyBoardAvoidingView = styled.KeyboardAvoidingView`
    flex: 1;
    width: 100%;

`;

export const UpViewItems = styled.View`
    width: 100%;
    align-items: center;

`;