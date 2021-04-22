import React from 'react';
import { Container, Content, Image, Text, Title } from './styles';

import emojiImg from '../../assets/Emoji.png';
import { Button } from '../../components/Button';
import { useNavigation, useRoute } from '@react-navigation/core';

interface Params {
    title: string;
    subTitle: string;
    buttonTitle: string;
    nextScreen: string;
};

const emojis = {
    hug: '',
    smile: ''
}

export function Confirmation() {
    const { navigate } = useNavigation();
    const routes = useRoute();
    
    const {
        title,
        buttonTitle,
        nextScreen,
        subTitle
    } = routes.params as Params;

    function handleNavigateToPlantSelect() {
        navigate(nextScreen);    
    }
    
    return (
        <Container>
            <Content>
                <Image source={emojiImg}/>

                <Title>{title}</Title>
                <Text>
                    {subTitle}
                </Text>

                <Button
                    onPress={handleNavigateToPlantSelect} 
                    text={buttonTitle}
                />
            </Content>
        </Container>
    );
}