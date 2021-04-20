import { Dimensions, Platform } from 'react-native';
import styled from 'styled-components/native';


interface TextProps {
    fontSize?: number;
    fontWeight: 'normal' | 'bold';
    color: string; 
};

export const Container = styled.SafeAreaView<any>`
    flex: 1;
    background: ${props => props.theme.colors.background};
`;

export const Wrapper = styled.View<any>`
    flex: 1;
    padding-top: ${Platform.OS==='android' ? `${40}px` : 0};
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
`;

export const Text = styled.Text<any>`
    font-size: ${props => props.fontSize ? `${props.fontSize}px` : `${16}px`};
    font-weight: ${props => props.fontWeight};
    font-family:  ${props => props.fontFamily  || 'sans-serif'};
    text-align: center;
    color: ${props => props.color ? props.color: props.theme.colors.heading};
    padding-left: 20px;
    padding-right: 20px;

`;

export const Image = styled.Image`
    height: ${Dimensions.get('window').width * 0.7}px;
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