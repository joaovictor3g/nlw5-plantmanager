import React, { useDebugValue, useState } from 'react';
import { Routes } from './src/routes';
import { ThemeProvider } from 'styled-components';
import { useColorScheme } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import themes from './src/styles';

export default function App() {
  const deviceTheme = useColorScheme();
  const theme = deviceTheme ? themes[deviceTheme] : themes.dark;

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style={deviceTheme==='dark' ? 'light': 'dark'}/>
      <Routes />
    </ThemeProvider>
  );
}
