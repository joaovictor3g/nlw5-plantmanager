import AsyncStorage from '@react-native-async-storage/async-storage';
import format from 'date-fns/format';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

export interface PlantProps {
    id: string;
    name: string;
    about: string;
    water_tips: string;
    photo: string;
    environments: string[];
    frequency: {
        times: number;
        repeat_every: string;
    },
    hour: string;
    dateTimeNotification: Date;
};

export interface StoragePlantProps {
    [id: string]: {
        data: PlantProps,
        notificationId: string;
    }
};

export interface ThemeProps {
    theme: {
        colors: {
            heading: string,
            primary_green: string,
            green: string,
            body: string,   
            body_dark: string,
            background: string,
            shape: string,
            blue: string,
            white: string,
            blue_light: string,
            textButton: string,
            background_secundary: string,
        }
    }
}

export async function requestNotificationsAsync() {
    return await Notifications.requestPermissionsAsync({
        android: {},
        ios: {
            allowAlert: true,
            allowBadge: true,
            allowSound: true,
            allowAnnouncements: true,
        },
    });
    
}

export async function allowsNotificationsAsync() {
    const settings = await Notifications.getPermissionsAsync();
    return (
      settings.granted || settings.ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL
    );
  }

export async function savePlant(plant: PlantProps): Promise<void> {
    try {   
        const nextTime = new Date(plant.dateTimeNotification);
        const now = new Date();

        const { repeat_every, times } = plant.frequency;

        // await AsyncStorage.clear();
        // return;

        if(repeat_every === 'week') {
            const interval = Math.trunc(7 / times);
            nextTime.setDate(now.getDate() + interval);
        }
        // else 
        //     nextTime.setDate(nextTime.getDate()+1);

        const seconds = Math.abs(
            Math.ceil((now.getTime() - nextTime.getTime()) / 1000)
        );

        const isNotificationAllowed = await allowsNotificationsAsync();
      
        
        if(!isNotificationAllowed){
            console.log('Sem permiss??o para notifica????o ;)');
            // return;
        }
        const notificationId = await Notifications.scheduleNotificationAsync({
                    content: {
                        title: 'Heey',
                        body: `Est?? na hora de cuidar da sua ${plant.name}`,
                        sound: true,
                        priority: Notifications.AndroidNotificationPriority.HIGH,
                        data: {
                            plant
                        },
                    },
                    trigger: {
                        seconds: seconds < 60 ? 60 : seconds,
                        repeats: true
                    }
                })
        //     }
        // }

        const data = await AsyncStorage.getItem('@plantmanager:plants')
        const oldPlants = data ? JSON.parse(data) as StoragePlantProps : {};

        const newPlant = {
            [plant.id]: {
                data: plant,
                notificationId
            }
        }

        Object
            .keys(oldPlants)
            .map(item => {
                if(oldPlants[item]===newPlant[plant.id]) {
                    console.log('Esta planta j?? existe')
                    return;
                } 
            })

        await AsyncStorage.setItem('@plantmanager:plants', JSON.stringify({
            ...newPlant,
            ...oldPlants
        }));

    } catch(err) {
        throw new Error(err);
    }
}

export async function loadPlants(): Promise<PlantProps[]> {
    try {
        const data = await AsyncStorage.getItem('@plantmanager:plants');
        
        if(data) {
            const plants = JSON.parse(data) as StoragePlantProps;
        
            const plantsSorted = Object
                .keys(plants)
                .map((plant, index:number) => {
                    return {
                        ...plants[plant].data,
                        hour: changeFormatDateTime(new Date(plants[plant].data.dateTimeNotification))
                    }
                })
                .sort((a, b) => 
                    Math.floor(
                        new Date(a.dateTimeNotification).getTime() / 1000 - 
                        Math.floor(new Date(b.dateTimeNotification).getTime() / 1000)
                    )
                );
            return plantsSorted;
        } else {
            return [];
        }

    } catch(err) {
        throw new Error(err);
        
    };

}

function changeFormatDateTime(date: Date) {
    return format(date, 'HH:mm');
}
