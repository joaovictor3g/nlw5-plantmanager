import React, { useState } from 'react';
import { Container, Content, Form, Text, Image, Input, KeyBoardAvoidingView, UpViewItems } from './styles';

import emojiImg from '../../assets/Emoji.png';
import { Button } from '../../components/Button';
import { Keyboard, Platform, TouchableWithoutFeedback, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function UserIdentification() {
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>('');

    function handleInputBlur() {
        setIsFocused(false);
    }

    function handleInputFocus() {
        setIsFocused(true);
    }
    
    function handleInputChange(value: string) {
        setIsFilled(!!value);
        setName(value);
    }   

    const { navigate } = useNavigation();

    async function handleNavigateToConfirmation() {
        if(!name) 
            return Alert.alert('Me diz como chamar você 😉')
        
        try {
            await AsyncStorage.setItem('@plantmanager:user', name);
            navigate('/user-confirmation', {
                title: 'Prontinho',
                subTitle: 'Agora vamos começar a cuidar das suas plantinhas',
                buttonTitle: 'Começar',
                nextScreen: '/plant-select'
            });
        
        } catch {
            Alert.alert('Não foi possível salvar o nome de usuário')
        }
    }

    return (
        <Container>
            <KeyBoardAvoidingView
                behavior={Platform.OS==='ios' ? 'padding' : 'height'}
            >
                <TouchableWithoutFeedback
                    onPress={Keyboard.dismiss}
                >
                    <Content>
                        <Form>
                            <UpViewItems>
                                <Image source={emojiImg}/>

                                <Text>Como podemos {'\n'} chamar você?</Text>
                                <Input 
                                    focus={isFocused || isFilled}
                                    placeholder="Digite um nome"
                                    onBlur={handleInputBlur}
                                    onFocus={handleInputFocus}
                                    onChangeText={handleInputChange}
                                />
                                <Button
                                    text="Continuar"
                                    onPress={handleNavigateToConfirmation}
                                />
                            </UpViewItems>
                        </Form>
                    </Content>
                </TouchableWithoutFeedback>
            </KeyBoardAvoidingView>
        </Container>
    );
}