import React from 'react';
import { Container, Text, Image, TouchableOpacity } from './styles';
import colors from '../../colors';
import wateringImage from '../../assets/watering.png';

export function Welcome() {
    return (
        <Container>
            <Text
                fontSize={32}
                fontWeight="bold"
                color={colors.heading}
            >
                Gerencie {'\n'}
                suas plantas {'\n'}
                de forma fácil
            </Text>

            <Image source={wateringImage}/>

            <Text
                fontWeight="normal"
                color={"#000"}
                fontSize={18}
                color={colors.heading}
            >
                Não esqueça mais de regar suas plantas. 
                Nós cuidamos de lembrar você
                sempre que precisar.
            </Text>

            <TouchableOpacity>
                <Text
                    color={colors.white}
                    fontSize={24}
                    fontWeight="normal"
                >
                    >
                </Text>
            </TouchableOpacity>
        </Container>
    );
}