import React from 'react'  
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import styles from './styles'

function Landing() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
       Proffy {'\n'} 
        <Text style={styles.titleBold}>Nem sei o que escrever XD</Text>
      </Text>
    </View>
  )
}

export default Landing 