import styled from 'styled-components/native';
import { ScrollViewProps } from 'react-native';
import fonts from '../../styles/fonts';

interface ScrollProps extends ScrollViewProps {
    theme: {
        colors: {
            background: string;
        }
    }
}

export const Scroll = styled.ScrollView<ScrollProps>`
    flex: 1;
    background: ${props => props.theme.colors.background};
`;

export const Container = styled.View<any>`
    flex: 1;
    justify-content: space-between;
    background: ${props => props.theme.colors.background};
`;

export const PlantInfo = styled.View<any>`
    
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 50px;
    align-items: center;
    justify-content: center;
`;

export const PlantName = styled.Text<any>`
    color: ${props => props.theme.colors.heading};
    font-family: ${fonts.heading};
    font-size: 24px;
    margin-top: 15px;
`;

export const AboutPlant = styled.Text<any>`
    text-align: center;
    font-family: ${fonts.text};
    color: ${props => props.theme.colors.heading};
    margin-top: 15px;
`;

export const Controller = styled.View<any>`
    background: ${props => props.theme.colors.background_secundary};
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    padding-bottom: 20px;

`;

export const TipContainer = styled.View<any>`
    border-radius: 20px;
    align-items: center;
    background: ${props => props.theme.colors.blue_light};
    padding: 20px;
    flex-direction: row;    
    justify-content: space-between;
    position: relative;
    bottom: 60px;
    width: 100%;
`;


export const TipImage = styled.Image`
    width: 46px;
    height: 46px;
`;

export const TipText = styled.Text<any>`
    flex-direction: row;
    font-family: ${fonts.text};
    color: ${props => props.theme.colors.blue};
    font-size: 14px;
    margin-left: 10px;
`;

export const AlertLabel = styled.Text<any>`
    text-align: center;
    font-family: ${fonts.complement};
    color: ${props => props.theme.colors.heading};
    font-size: 14px;
    margin-bottom: 5px;
`;

export const ChangeDateButton = styled.TouchableOpacity`
    width: 100%;
    align-items: center;
    padding-top: 40px;
`;

export const ChangeDateText = styled.Text<any>`
    color: ${props=>props.theme.colors.textButton};
    font-size: 24px;
    font-family: ${fonts.text};
`;

export const SaveButton = styled.TouchableOpacity``;
