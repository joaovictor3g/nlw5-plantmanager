import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { TextButton, Button } from './styles';

interface EnvironmentButtonProps extends TouchableOpacityProps {
    title: string;
    active?: boolean;
}

export function EnvironmentButton({ title, active=false, ...rest }: EnvironmentButtonProps) {
    return (
        <Button 
            isActive={active}
            {...rest}
        >
            <TextButton
                isActive={active}
            >
                {title}
            </TextButton>
        </Button>
    );
}