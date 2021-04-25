import { TextProps, TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";
import { ThemeProps } from "../../libs/storage";

interface TextModalProps extends TextProps {
    theme: ThemeProps
    fontFamily: string;
    fontSize: number;
    fontWeight: 'bold' | 'normal';
}

interface ButtonProps extends TouchableOpacityProps {
    theme: ThemeProps;

}

export const Container = styled.View`
    flex:1;
    width: 100%;
    position: absolute;
    top: 40%;
    align-items: center;
`;

export const ModalBox = styled.View`
    width: 70%;
    justify-content: space-between;
    align-items: center;
    height: 300px;
    border-radius: 20px;
    padding: 20px;
    position: absolute;
    z-index: 5;

    background: #F0F0F0;
`;

export const PlantImage = styled.Image`
    background: #666;
`;

export const TextView = styled.View`
    align-items: center;
`;

export const TextModal = styled.Text<TextModalProps>`
    font-family: ${props => props.fontFamily};
    font-size: ${props => props.fontSize}px;
    font-weight: ${props => props.fontWeight};
`;

export const ButtonGroup = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
`;

export const Button = styled.TouchableOpacity<ButtonProps>`
    width: 40%;
    background: #D3E0D7;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    height: 30px;
`;