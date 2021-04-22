import React from 'react';
import { Container, Content, Image, Text, Title } from './styles';

import emojiImg from '../../assets/Emoji.png';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/core';

export function Confirmation() {
    const { navigate } = useNavigation();

    function handleNavigateToPlantSelect() {
        navigate('/plant-select');    
    }
    
    return (
        <Container>
            <Content>
                <Image source={emojiImg}/>

                <Title>Prontinho</Title>
                <Text>
                    Agora vamos cuidar das suas
                    plantinhas com muito cuidado.
                </Text>

                <Button
                    onPress={handleNavigateToPlantSelect} 
                    text="Começar"
                />
            </Content>
        </Container>
    );
}