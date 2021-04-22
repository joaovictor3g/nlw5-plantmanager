import React, { useEffect, useState } from 'react';
import { Container, TextContainer, ImageProfile, UserName, Greeting } from './styles';

import userImg from '../../assets/profile.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Header() {
    const [user, setUser] = useState('');
    
    async function getUserFromAsyncStorage() {
        try {
            const response = await AsyncStorage.getItem('@plantmanager:user');
            if(response) {
                setUser(response);
            }
        } catch(err) {
            console.log(err);
        }
    } 

    useEffect(() => {
        getUserFromAsyncStorage()
    }, [])

    return(
        <Container>
            <Greeting>
                <TextContainer>Olá,</TextContainer>
                <UserName>{user}</UserName>
            </Greeting>
        
            <ImageProfile 
                source={userImg}
                resizeMode="contain"
            />
        </Container>
    );
}