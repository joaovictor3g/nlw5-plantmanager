import React from 'react';
import { Routes } from './src/routes';
import { ThemeProvider } from 'styled-components';
import { useColorScheme, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost';
import AppLoading from 'expo-app-loading';
import themes from './src/styles';

export default function App() {
  const deviceTheme = useColorScheme();
  const theme = deviceTheme ? themes[deviceTheme] : themes.dark;

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
