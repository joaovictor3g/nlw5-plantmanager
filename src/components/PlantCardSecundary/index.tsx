import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Button, Details, Text, TimeLabel, Time } from './styles';
import { SvgFromUri } from 'react-native-svg';

interface PlantProps extends TouchableOpacityProps {
    data: {
        name: string;
        photo: string;
        hour: string;
    }
}

export function PlantCardSecundary({ data, ...rest }: PlantProps) {
    return (
        <Button
            {...rest}
        >
            <SvgFromUri 
                uri={data.photo}
                width={50}
                height={50}    
            />
            <Text>{data.name}</Text>

            <Details>
                <TimeLabel>
                    Regar às
                </TimeLabel>

                <Time>
                    {data.hour}
                </Time>
            </Details>
        </Button>
    );
}