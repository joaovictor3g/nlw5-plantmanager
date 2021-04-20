import React from 'react';
import { Container, Text, Image, TouchableOpacity, Wrapper } from './styles';

import colors from '../../colors';
import wateringImage from '../../assets/watering.png';

import { Entypo } from '@expo/vector-icons';
import fonts from '../../styles/fonts';

export function Welcome() {
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

                <TouchableOpacity>
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