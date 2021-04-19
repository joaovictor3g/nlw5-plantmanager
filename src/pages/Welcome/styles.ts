import styled from 'styled-components/native';
import colors from '../../colors';

interface TextProps {
    fontSize?: number;
    fontWeight: 'normal' | 'bold';
    color: string; 
};

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: space-between;
`;

export const Text = styled.Text<TextProps>`
    font-size: ${props => props.fontSize ? `${props.fontSize}px` : `${16}px`};
    font-weight: ${props => props.fontWeight};
    text-align: center;
    color: ${props => props.color};
    padding-left: 20px;
    padding-right: 20px;

`;

export const Image = styled.Image`

`;

export const TouchableOpacity = styled.TouchableOpacity`
    background: ${colors.green};
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    margin-bottom: 10px;
    height: 56px;
    width: 56px;
`;