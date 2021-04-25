import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { Container, SpotLight, Image, SpotlightText, PlantTitle, Plants, Wrapper, NormalText } from './styles';
import * as Notifications from 'expo-notifications';
import waterDrop from '../../assets/waterdrop.png';
import { loadPlants, PlantProps, StoragePlantProps } from '../../libs/storage';
import { formatDistance } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import { Alert, FlatList, View } from 'react-native';
import { PlantCardSecundary } from '../../components/PlantCardSecundary';
import { Loading } from '../../components/Loading';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ModalRemovePlant } from '../../components/ModalRemovePlant';

export function MyPlants() {
    const [plants, setPlants] = useState<PlantProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [nextWater, setNextWater] = useState('');
    const [isRemoveButtonPressed, setIsRemoveButtonPressed] = useState(false);
    const [plant, setPlant] = useState({} as PlantProps);
    
    function handleRemove(plant: PlantProps) {
        setIsRemoveButtonPressed(true);
        setPlant(plant);
    }

    async function removePlant(plant: PlantProps) {
        try {
            const data = await AsyncStorage.getItem('@plantmanager:plants');
            if(data) {
                const plants = JSON.parse(data) as StoragePlantProps;
                
                await Notifications.cancelScheduledNotificationAsync(plants[plant.id].notificationId);
              
                delete plants[plant.id];
            
            }

            await AsyncStorage.setItem(
                '@plantmanager:plants',
                JSON.stringify(plants)
            );

            setPlants(plants.filter(item => plant.id!==item.id));
            setIsRemoveButtonPressed(false)
        } catch (error) {
            Alert.alert('Não foi possível remover');
        }
    }

    async function loadStorageData() {
        try {
            const plantsStorage = await loadPlants();

            if(plantsStorage) {
                const nextTime = formatDistance(
                    new Date(plantsStorage[0].dateTimeNotification).getTime(),
                    new Date().getTime(),
                    { locale: ptBr }
                );

                setNextWater(
                    `Não esqueça de regar a ${plantsStorage[0].name} à ${nextTime} horas`
                )

                setPlants(plantsStorage);
               
            }

        } catch(err) {
            console.log(err)
        }

        setLoading(false);
    }

    useEffect(() => {
        loadStorageData();
    }, []);

    if(loading) 
        return <Loading />

    return (
        <>
            { isRemoveButtonPressed && 
                <ModalRemovePlant 
                    plant={plant}
                    onClose={()=>setIsRemoveButtonPressed(false)}
                    removePlant={() => removePlant(plant)}    
                /> 
            }
            <Container 
                style={isRemoveButtonPressed ? { background: '#000001' } : {}}   
            >
                
                <Wrapper>
                    <Header />
                    { plants.length>0 ? (
                    <>
                        <SpotLight>
                            <Image 
                                source={waterDrop}
                            />
                            <SpotlightText>
                                {nextWater}
                            </SpotlightText>

                        </SpotLight>

                        <Plants>
                            <PlantTitle>
                                Próximas regadas
                            </PlantTitle>

                            <FlatList 
                                data={plants}
                                renderItem={({ item }) => (
                                    <PlantCardSecundary 
                                        data={item}
                                        handleRemove={() => handleRemove(item)}    
                                    />
                                )}
                                showsVerticalScrollIndicator={false}
                                keyExtractor={item => String(item.id)}
                            
                            />
                        </Plants>
                    </>
                    ) : (
                        <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
                            <NormalText>Não há plantas salvas</NormalText>
                        </View>
                    )}
                </Wrapper>
            </Container>
            
        </>
    );
}