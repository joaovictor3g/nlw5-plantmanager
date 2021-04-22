import styled from 'styled-components/native';
import fonts from '../../styles/fonts';

export const Container = styled.View<any>`
    flex:1;
    align-items: center;
    justify-content: space-between;
    padding-left: 30px;
    padding-right: 30px;
    background: ${props => props.theme.colors.background};

`;

export const Wrapper = styled.View`
    flex: 1;
    width: 100%;
    margin-top: 50px;
`;

export const SpotLight = styled.View<any>`
    background: ${props => props.theme.colors.blue_light};
    border-radius: 20px;
    height: 110px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 30px;
`;

export const Image = styled.Image`
    height: 60px;
    width: 60px;
`;

export const SpotlightText = styled.Text<any>`
    flex: 1;
    color: ${props => props.theme.colors.blue};
    font-family: ${fonts.text};
    text-align: left;
    margin-left: 20px;
`;

export const Plants = styled.View`
    flex: 1;
    width: 100%;
    margin-top: 30px;
`;

export const PlantTitle = styled.Text<any>`
    font-size: 24px;
    font-family: ${fonts.heading};
    color: ${props => props.theme.colors.heading};
`;
