import React from 'react';
import { Container, Content, Image, Text, Title } from './styles';

import emojiImg from '../../assets/Emoji.png';
import { Button } from '../../components/Button';

export function Confirmation() {
    return (
        <Container>
            <Content>
                <Image source={emojiImg}/>

                <Title>Prontinho</Title>
                <Text>
                    Agora vamos cuidar das suas
                    plantinhas com muito cuidado.
                </Text>

                <Button text="Começar"/>
            </Content>
        </Container>
    );
}