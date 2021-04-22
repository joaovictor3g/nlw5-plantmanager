import React, { useState } from 'react';
import { Alert, Platform, useColorScheme } from 'react-native';
import { AboutPlant, AlertLabel, Container, Controller, TipImage, PlantInfo, PlantName, TipContainer, TipText, ChangeDateButton, ChangeDateText} from './styles';
import { SvgFromUri } from 'react-native-svg';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import wateringDrop from '../../assets/waterdrop.png';
import { Button } from '../../components/Button';
import { useNavigation, useRoute } from '@react-navigation/core';
import { isBefore } from 'date-fns';
import format from 'date-fns/format';
import { loadPlants, PlantProps, savePlant } from '../../libs/storage';


interface Params {
    plant: PlantProps;
}

export function PlantSave() {
    const route = useRoute();
    const { navigate } = useNavigation();
    const { plant } = route.params as Params;
    const deviceTheme = useColorScheme();

    const [selectDateTime, setSelectedDateTime] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(Platform.OS==='ios')

    function handleChangeTime(e: Event, dateTime: Date | undefined) {
        if(Platform.OS==='android')
            setShowDatePicker(!showDatePicker);
        
        if(dateTime && isBefore(dateTime, new Date())) {
            setSelectedDateTime(new Date());
            return Alert.alert('Escolha uma hora no futuro! ');
        }

        if(dateTime)
            setSelectedDateTime(dateTime);
    }

    function handleOpenDateTimePickerForAndroid() {
        setShowDatePicker(!showDatePicker);
    }

    async function handleSave() {
        try {
            await savePlant({
                ...plant,
                dateTimeNotification: selectDateTime
            });

            navigate('/user-confirmation', {
                title: 'Tudo certo',
                subTitle: 'Fique tranquilo que sempre vamos lembrar você da sua plantinha',
                buttonTitle: 'Muito obrigado :D',
                nextScreen: '/my-plants'
            })

        } catch {
            Alert.alert('Não foi possível salvar')
        }
    }

    return (    
        <Container>
            <PlantInfo>
                {/* <SvgFromUri 
                    uri={plant.photo}
                    height={150}
                    width={150}
                /> */}

                <PlantName>{plant.name}</PlantName>

                <AboutPlant>
                    {plant.about}
                </AboutPlant>
            </PlantInfo>

            <Controller>
                <TipContainer>
                    <TipImage 
                        source={wateringDrop}
                    />
                   
                    <TipText>
                        {plant.water_tips}
                    </TipText>
            
                </TipContainer>
                
                <AlertLabel>
                    Escolha o melhor horário para ser lembrado
                </AlertLabel>

               { showDatePicker && 
                    <DateTimePicker 
                        value={selectDateTime}
                        mode="time"
                        display="spinner"
                        onChange={handleChangeTime}
                        style={{ zIndex: 5 }}
                        textColor={deviceTheme==='dark' ? '#fff' : '#000'}
                    />
                }
                
                { Platform.OS==='android' && (
                    <ChangeDateButton 
                        onPress={handleOpenDateTimePickerForAndroid}
                    >
                        <ChangeDateText>
                            Mudar {format(selectDateTime, 'HH:mm')}
                        </ChangeDateText>
                    </ChangeDateButton>
                ) }

                <Button 
                    text="Cadastrar planta"
                    onPress={handleSave}    
                />
            </Controller>
        </Container>
    )
}