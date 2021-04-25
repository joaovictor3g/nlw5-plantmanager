import React from 'react';
import { SvgFromUri } from 'react-native-svg';
import { PlantProps } from '../../libs/storage';
import fonts from '../../styles/fonts';
import { Container, ModalBox, Button, ButtonGroup, PlantImage, TextModal, TextView } from './styles';

interface ModalRemovePlantProps {
    plant: PlantProps;
    onClose: () => void;
    removePlant: () => Promise<void>;
}

export function ModalRemovePlant({ plant, onClose, removePlant }: ModalRemovePlantProps) {
    return (
        <Container>
            <ModalBox>
                <SvgFromUri 
                    uri={plant.photo}
                    width={90}
                    height={90}
                />

                <TextView>
                    <TextModal
                        fontFamily={fonts.heading}
                        fontSize={17}
                        fontWeight="normal"
                    >
                        Deseja mesmo deletar sua
                    </TextModal>

                    <TextModal
                        fontSize={15}
                        fontWeight='bold'
                        fontFamily={fonts.heading}
                    >
                        {plant.name}
                    </TextModal>
                </TextView>

                <ButtonGroup>
                    <Button
                        onPress={onClose}
                    >
                        <TextModal
                            fontFamily={fonts.heading}
                            fontSize={14}
                            fontWeight="normal"
                        >Cancelar</TextModal>
                    </Button>
                    <Button
                        onPress={removePlant}
                    >
                        <TextModal
                            fontFamily={fonts.heading}
                            fontSize={14}
                            fontWeight="normal"
                        >Deletar</TextModal>
                    </Button>
                </ButtonGroup>
            </ModalBox>
        </Container>

    );
}