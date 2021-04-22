import styled from 'styled-components/native';
import fonts from '../../styles/fonts';

export const Button = styled.TouchableOpacity<any>`
    background: ${props => props.isActive ? props.theme.colors.primary_green : props.theme.colors.shape};
    height: 40px;
    width: 76px;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    margin-right: 5px;
    
`;

export const TextButton = styled.Text<any>`
    color: ${props => props.isActive ? props.theme.colors.green: props.theme.colors.textButton};
    font-family: ${props => props.isActive ? fonts.heading : fonts.text};
    font-weight: ${props => props.isActive ? 'bold': 'normal'};
`;
