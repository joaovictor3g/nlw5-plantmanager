import React, { useEffect } from 'react';
import { Routes } from './src/routes';
import { ThemeProvider } from 'styled-components';
import { useColorScheme, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost';
import AppLoading from 'expo-app-loading';
import themes from './src/styles';
import * as Notifications from 'expo-notifications';
import { PlantProps } from './src/libs/storage';

export default function App() {
  const deviceTheme = useColorScheme();
  const theme = deviceTheme ? themes[deviceTheme] : themes.dark;

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      async notification => {
        const data = notification.request.content.data.plant as PlantProps;
        console.log(data)
      });

      return () => subscription.remove();
  }, []);

  const [fontsLoaded] = useFonts({
    Jost_400Regular, 
    Jost_600SemiBold
  });

  if(!fontsLoaded) {
    return (
     <AppLoading />
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style={deviceTheme==='dark' ? 'light': 'dark'}/>
      <Routes />
    </ThemeProvider>
  );
}
