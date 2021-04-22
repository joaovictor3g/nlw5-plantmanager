import React from 'react';

import LottieView from 'lottie-react-native';
import loadAnimation from '../../assets/load.json';
import { Container } from './styles';

export function Loading() {
    return (
        <Container>
            <LottieView 
                source={loadAnimation}
                autoPlay
                loop
                style={{
                    backgroundColor: 'transparent',
                    width: 200,
                    height: 200
                }}    
            />
        </Container>
    );
}