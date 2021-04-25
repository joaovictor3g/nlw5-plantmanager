import React from 'react';
import { Animated, TouchableWithoutFeedbackProps, PressableProps, View } from 'react-native';
import { Button, Details, Text, TimeLabel, Time } from './styles';
import { SvgFromUri } from 'react-native-svg';
import { RectButton, Swipeable } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import colors from '../../colors';


interface PlantProps extends PressableProps {
    data: {
        name: string;
        photo: string;
        hour: string;
    };
    handleRemove: () => void;
}

export function PlantCardSecundary({ data, handleRemove, ...rest }: PlantProps) {
    return (
        <Swipeable
            containerStyle={{
                alignItems: 'center',
                justifyContent: 'center'
            }}
            overshootRight={false}
            renderRightActions={() => (
                <Animated.View style={{
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <View >
                        <RectButton
                            style={{
                                width: 100,
                                height: 88,
                                backgroundColor: colors.red,
                                marginTop: 20,
                                borderRadius: 20,
                                justifyContent: 'center',
                                position: 'relative',
                                right: 25,
                                padding: 15,
                                alignItems: 'center'
                            }}
                            onPress={handleRemove}
                        >
                            <Feather name="trash" size={24} color={colors.white}/>
                        </RectButton>
                    </View>
                </Animated.View>
            )}
        >
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
        </Swipeable>
    );
}