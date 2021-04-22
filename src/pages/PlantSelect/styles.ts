import styled from 'styled-components/native';
import fonts from '../../styles/fonts';

export const Container = styled.SafeAreaView<any>`
    flex: 1;
    background: ${props => props.theme.colors.background};
`;

export const Wrapper = styled.View`
    flex: 1;
    width: 100%;
    padding-left: 30px;
    padding-right: 30px;
`;

export const Title = styled.Text<any>`
    color: ${props => props.theme.colors.heading};
    font-size: 17px;
    font-family: ${fonts.heading};
    line-height: 20px;
    margin-top: 15px;

`;

export const SubTitle = styled.Text<any>`
    font-family: ${fonts.text};
    font-size: 17px;
    line-height: 20px;
    color:  ${props => props.theme.colors.heading};
`;

export const FlatListWrapper = styled.View`
    padding-bottom: 5px;
    margin-top: 32px;
`;


export const PlantsFlatListWrapper = styled.View`
    flex:1;
    padding-top: 32px;
    justify-content: center;
`;
