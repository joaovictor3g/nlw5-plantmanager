import styled from 'styled-components/native';
import fonts from '../../styles/fonts';

export const ConfirmButton = styled.TouchableOpacity<any>`
    background: ${props => props.theme.colors.green};
    height: 56px;
    border-radius: 16px;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 20px;
`;

export const ButtonText = styled.Text<any>`
    font-size: 16px;
    color: ${props => props.theme.colors.white};
    font-family: ${fonts.heading};
`;