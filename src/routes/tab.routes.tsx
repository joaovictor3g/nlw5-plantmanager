import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from '../colors';
import { PlantSelect } from '../pages/PlantSelect';
import { MaterialIcons } from '@expo/vector-icons';
import { MyPlants } from '../pages/MyPlants';

const Tab = createBottomTabNavigator();

export function AuthRoutes() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: colors.green,
                inactiveTintColor: colors.heading,
                labelPosition: 'beside-icon',
                style: {
                    height: 88,
                    alignItems: 'center',
                    justifyContent: 'center',
                }
            }}
        >
            <Tab.Screen 
                name="new-plant" 
                component={PlantSelect}
                options={{
                    tabBarLabel: 'Nova Planta',
                    tabBarIcon: (({ size, color }) => (
                        <MaterialIcons 
                            size={size}
                            name="add-circle-outline"
                            color={color}
                        />
                    ))
                }}
            />

            <Tab.Screen 
                name="my-plants" 
                component={MyPlants}
                options={{
                    tabBarLabel: 'Minhas Plantas',
                    tabBarIcon: (({ size, color }) => (
                        <MaterialIcons 
                            size={size}
                            name="format-list-bulleted"
                            color={color}
                        />
                    ))
                }}
            />
        </Tab.Navigator>

    );
}