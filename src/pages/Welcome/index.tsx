import React, { useEffect } from 'react';
import { Container, Text, Image, TouchableOpacity, Wrapper } from './styles';
import colors from '../../colors';
import wateringImage from '../../assets/watering.png';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import fonts from '../../styles/fonts';
import { requestNotificationsAsync } from '../../libs/storage';

export function Welcome() {
    const { navigate } = useNavigation();
    
    function handleNavigateToUserIdentification() {
        navigate('/user-identification');
    }
    
    return (
        <Container>
            <Wrapper>
                <Text
                    fontSize={28}
                    fontWeight="bold"
                    fontFamily={fonts.heading}
                    
                >
                    Gerencie {'\n'}
                    suas plantas de {'\n'}
                    forma fácil
                </Text>

                <Image 
                    source={wateringImage}
                    resizeMode="contain"
                />

                <Text
                    fontWeight="normal"
                    fontSize={18}
                    fontFamily={fonts.text}
                    
                >
                    Não esqueça mais de regar suas plantas. 
                    Nós cuidamos de lembrar você
                    sempre que precisar.
                </Text>

                <TouchableOpacity onPress={handleNavigateToUserIdentification}>
                    <Entypo 
                        name="chevron-thin-right" 
                        size={24}
                        color={colors.white}
                    />
                
                </TouchableOpacity>
            </Wrapper>
        </Container>
    );
}