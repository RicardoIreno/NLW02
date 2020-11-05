import React from 'react'  
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native'


import styles from './styles'

function Landing() {
  const { navigate } = useNavigation()

  function handleNavigateToGiveClassesPage() {
    navigate('GiveClasses') 
  }

  function handelNavigateToStudyPages() {
    navigate('Study')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
       Proffy {'\n'} 
        <Text style={styles.titleBold}>Eu sou o Landing {'\n'} </Text>
      </Text>

        <TouchableOpacity onPress={handleNavigateToGiveClassesPage}
          style={[styles.buttonContainer, styles.buttonPrimary]} >
          <Text>GiveClasses</Text>   
        </TouchableOpacity>

        <TouchableOpacity onPress={handelNavigateToStudyPages}
          style={[styles.buttonContainer, styles.buttonPrimary]} >
          <Text>Study</Text>   
        </TouchableOpacity>
    </View>
  )
}

export default Landing 