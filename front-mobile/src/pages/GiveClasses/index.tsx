import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import styles from './styles'

function GiveClasses() {
  const { goBack } = useNavigation()

  function handleNavigateBack(){
    goBack()
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.titleBold}>Oi, eu sou o GiveClasses</Text>

        <TouchableOpacity onPress={handleNavigateBack}
          style={[styles.buttonContainer, styles.buttonPrimary]} >
        
          <Text>Voltar</Text>
        
        </TouchableOpacity>    
    </View>
  )
}

export default GiveClasses