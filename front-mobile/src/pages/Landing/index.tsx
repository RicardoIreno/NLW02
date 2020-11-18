import React, {useEffect, useState} from 'react'  
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import api from '../../services/api'

import styles from './styles'


function Landing() {
  const { navigate } = useNavigation()

  const [totalConnections, setTotalConnections] = useState(0)

  useEffect( ()=> {
    api.get('connections').then(response => {
      const { total } = response.data

      setTotalConnections(total)
    })
  })


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

      <View style={styles.buttonContainer}>

        <TouchableOpacity onPress={handleNavigateToGiveClassesPage}
          style={[styles.button, styles.buttonPrimary]} >
          <Text>GiveClasses</Text>   
        </TouchableOpacity>

        <TouchableOpacity onPress={handelNavigateToStudyPages}
          style={[styles.button, styles.buttonPrimary]} >
          <Text>Study</Text>   
        </TouchableOpacity>

      </View>

      <Text>
        Total de {totalConnections} conexões realiadas
      </Text>
       
    </View>
  )
}

export default Landing 