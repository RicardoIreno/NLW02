import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { AppLoading } from 'expo';

import { Archivo_400Regular, useFonts } from '@expo-google-fonts/archivo'
import { Poppins_600SemiBold } from '@expo-google-fonts/poppins'

import AppStack from './src/routes/AppTack'


export default function App() {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Poppins_600SemiBold,
  })

  if (!fontsLoaded) {
    return <AppLoading />} 
  
  else {
    return (
      <>
        <AppStack />
        <StatusBar style="auto" />
      </>
    ) 
  } 
}


