import React from 'react';
import { Container, TextContainer, ImageProfile, UserName, Greeting } from './styles';

import userImg from '../../assets/profile.png';

export function Header() {
    return(
        <Container>
            <Greeting>
                <TextContainer>Olá,</TextContainer>
                <UserName>João Victor</UserName>
            </Greeting>
        
            <ImageProfile 
                source={userImg}
                resizeMode="contain"
            />
        </Container>
    );
}