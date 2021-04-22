import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Button, Image, Text } from './styles';
import { SvgFromUri } from 'react-native-svg';

interface PlantProps extends TouchableOpacityProps {
    data: {
        name: string;
        photo: string;
    }
}

export function PlantCardPrimary({ data, ...rest }: PlantProps) {
    return (
        <Button
            {...rest}
        >
            <SvgFromUri 
                uri={data.photo}
                width={70}
                height={70}    
            />
            <Text>{data.name}</Text>
        </Button>
    );
}