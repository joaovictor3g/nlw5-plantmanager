import React, { useEffect, useState } from 'react';
import { EnvironmentButton } from '../../components/EnvironmentButton';
import { Header } from '../../components/Header';
import { api } from '../../services/api';
import { ActivityIndicator, FlatList } from 'react-native';
import { Container, Title, SubTitle, Wrapper, FlatListWrapper, PlantsFlatListWrapper } from './styles';
import { PlantCardPrimary } from '../../components/PlantCardPrimary';
import { Loading } from '../../components/Loading';

interface EnvironmentProps {
    key: string;
    title: string;
}

interface PlantProps {
    id: string;
    name: string;
    about: string;
    water_tips: string;
    photo: string;
    environments: string[];
    frequency: {
        times: number;
        repeat_every: string;
    }
}

export function PlantSelect() {
    const [environments, setEnvironments] = useState<EnvironmentProps[]>([]);
    const [plants, setPlants] = useState<PlantProps[]>([]);
    const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([]);
    const [environmentSelected, setEnvironmentSelected] = useState('all');
    const [isLoading, setIsLoading] = useState(true);
    
    const [page, setPage] = useState(1);
    const [loadingMore, setLoadingMore] = useState(false);
    const [loadedAll, setLoadedAll] = useState(false);

    useEffect(() => {
        fetchEnvironment();
    }, []);

    useEffect(() => {
        fetchPlants();
    }, []);

    function handleFetchMore(distance: number) {
        console.log(distance)

        if(distance < 1) 
            return;
        setLoadingMore(true);
        setPage(oldValue => oldValue+1);
        fetchPlants();
    }

    async function fetchEnvironment() {
        const { data } = await api.get('plants_environments', {
            params: {
                _sort: 'title',
                _order: 'asc'
            }
        });

        setEnvironments([
            {
                key: 'all',
                title: 'Todos'
            },
            ...data
        ]);
    }  

    async function fetchPlants() {
        const { data } = await api.get('plants', {
            params: {
                _sort: 'name',
                _order: 'asc',
                _page: page,
                _limit: 5
            }
        });

        if(!data) return setIsLoading(true);

        if(page > 1) {
            setPlants(oldValue => [...oldValue, ...data]);
            setFilteredPlants(oldValue => [...oldValue, ...data]);
        }else{
            setPlants(data);
            setFilteredPlants(data);    
        }

        setLoadingMore(false);
        setIsLoading(false);
    }  
    
    function handlePressEnvironmentButton(environment: string) {
        setEnvironmentSelected(environment)
    
        if(environment === 'all') {
            return setFilteredPlants(plants);
        }

        const filtered = plants.filter(plant => plant.environments.includes(environment));

        setFilteredPlants(filtered);
    }
    if(isLoading) 
        return <Loading />

    return (
        <Container>
            <Wrapper>
                <Header />

                <Title>
                    Em qual ambiente
                </Title>

                <SubTitle>
                    você quer colocar sua planta?
                </SubTitle>

                <FlatListWrapper>
                    <FlatList 
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={environments}
                        renderItem={({ item }) => (
                            <EnvironmentButton 
                                active={item.key===environmentSelected} 
                                title={item.title}
                                onPress={() => handlePressEnvironmentButton(item.key)}
                            />
                        )}
                        keyExtractor={item => item.key}
                    />
                </FlatListWrapper>

                <PlantsFlatListWrapper>
                    <FlatList 
                        data={filteredPlants}
                        renderItem={({ item }) => (
                            <PlantCardPrimary 
                                data={item}
                            />
                        )}
                        keyExtractor={item => item.id}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                        onEndReachedThreshold={0.1}
                        onEndReached={({ distanceFromEnd }) => handleFetchMore(distanceFromEnd)}
                        ListFooterComponent={
                            loadingMore 
                                ? <ActivityIndicator />
                                : <></> 
                        }
                    />
                </PlantsFlatListWrapper>
                
            </Wrapper>
            
        </Container>
    );
}