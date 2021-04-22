import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { Container, SpotLight, Image, SpotlightText, PlantTitle, Plants, Wrapper } from './styles';

import waterDrop from '../../assets/waterdrop.png';
import { loadPlants, PlantProps } from '../../libs/storage';
import { formatDistance } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import { FlatList } from 'react-native';
import { PlantCardSecundary } from '../../components/PlantCardSecundary';

export function MyPlants() {
    const [plants, setPlants] = useState<PlantProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [nextWater, setNextWater] = useState('');

    async function loadStorageData() {
        const plantsStorage = await loadPlants();

        const nextTime = formatDistance(
            new Date(plantsStorage[0].dateTimeNotification).getTime(),
            new Date().getTime(),
            { locale: ptBr }
        );

        setNextWater(
            `Não esqueça de regar a ${plantsStorage[0].name} à ${nextTime} horas`
        )

        setPlants(plantsStorage);
        setLoading(false);
    }

    useEffect(() => {
        loadStorageData();
    }, [])

    return (
        <Container>
            <Wrapper>
                <Header />

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
                            <PlantCardSecundary data={item}/>
                        )}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ flex: 1 }}
                        keyExtractor={item => item.id}
                    
                    />
                </Plants>
            </Wrapper>
        </Container>
    );
}