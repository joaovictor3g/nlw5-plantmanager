import AsyncStorage from '@react-native-async-storage/async-storage';
import format from 'date-fns/format';

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
        data: PlantProps
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

export async function savePlant(plant: PlantProps): Promise<void> {
    try {   
        const data = await AsyncStorage.getItem('@plantmanager:plants')
        const oldPlants = data ? JSON.parse(data) as StoragePlantProps : {};

        const newPlant = {
            [plant.id]: {
                data: plant
            }
        }

        // await AsyncStorage.clear();
        // return;

        Object
            .keys(oldPlants)
            .map(item => {
                if(oldPlants[item]===newPlant[plant.id]) {
                    console.log('Esta planta já existe')
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

// export async function removePlant(plant: PlantProps) {
//     try {
//         const data = await AsyncStorage.getItem('@plantmanager:plants');
//         if(data) {
//             const plants = JSON.parse(data);

//             delete plants[plant.id];
//         }

//         await AsyncStorage.setItem(
//             '@plantmanager:plants',
//             JSON.stringify(plants)
//         );

       
    
//     } catch (error) {
//         Alert.alert('Não foi possível remover');
//     }
// }