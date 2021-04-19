import { Platform } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../colors';

interface TextProps {
    fontSize?: number;
    fontWeight: 'normal' | 'bold';
    color: string; 
};

export const Container = styled.SafeAreaView<any>`
    padding-top: ${Platform.OS==='android' && `${40}px`};
    flex: 1;
    align-items: center;
    justify-content: space-between;
    background: ${props => props.theme.colors.background};
`;

export const Text = styled.Text<any>`
    font-size: ${props => props.fontSize ? `${props.fontSize}px` : `${16}px`};
    font-weight: ${props => props.fontWeight};
    text-align: center;
    color: ${props => props.theme.colors.heading};
    padding-left: 20px;
    padding-right: 20px;

`;

export const Image = styled.Image`

`;

export const TouchableOpacity = styled.TouchableOpacity<any>`
    background: ${props => props.theme.colors.green};
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    margin-bottom: 10px;
    height: 56px;
    width: 56px;
`;