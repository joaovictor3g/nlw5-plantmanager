import React, { useState } from 'react';
import { Container, Content, Form, Text, Image, Input, KeyBoardAvoidingView, UpViewItems } from './styles';

import emojiImg from '../../assets/Emoji.png';
import { Button } from '../../components/Button';
import { Keyboard, Platform, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/core';


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

    function handleNavigateToConfirmation() {
        navigate('/user-confirmation');
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