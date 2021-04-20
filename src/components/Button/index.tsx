import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { ButtonText, ConfirmButton } from './styles';

interface ButtonProps extends TouchableOpacityProps {
    text: string;
}

export function Button({ text, ...rest }: ButtonProps) {
    return (
        <ConfirmButton
            {...rest}
        >
            <ButtonText>
                {text}
            </ButtonText>
        </ConfirmButton>
    );
}