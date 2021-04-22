import styled from 'styled-components/native';
import fonts from '../../styles/fonts';

export const Button = styled.TouchableOpacity<any>`
    flex: 1;
    max-width: 45%;
    background: ${props => props.theme.colors.shape};
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    margin: 10px;
    padding: 20px;
`;

export const Text = styled.Text<any>`
    color: ${props => props.theme.colors.textButton};
    font-family: ${fonts.heading};
    font-size: 14px;
`;


export const Image = styled.Image`

`;