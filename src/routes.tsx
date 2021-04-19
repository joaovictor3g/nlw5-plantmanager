import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Welcome } from './pages/Welcome';

const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarVisible: false
                }}
            >
                <Tab.Screen name="/" component={Welcome}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}