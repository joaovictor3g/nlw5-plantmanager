import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Welcome } from '../pages/Welcome';
import { UserIdentification } from '../pages/UserIdentification';
import { Confirmation } from '../pages/Confirmation';
import { PlantSelect } from '../pages/PlantSelect';
import { PlantSave } from '../pages/PlantSave.tsx';
import { MyPlants } from '../pages/MyPlants';
import { AuthRoutes } from './tab.routes';

const Stack = createStackNavigator();

export function StackRoutes() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
        
            }}

        >
            <Stack.Screen name="/" component={Welcome}/>
            <Stack.Screen name="/user-identification" component={UserIdentification}/>
            <Stack.Screen name="/user-confirmation" component={Confirmation}/>
            <Stack.Screen name="/plant-select" component={AuthRoutes}/>
            <Stack.Screen name="/plant-save" component={PlantSave}/>
            <Stack.Screen name="/my-plants" component={AuthRoutes}/>
        </Stack.Navigator>

    );
}