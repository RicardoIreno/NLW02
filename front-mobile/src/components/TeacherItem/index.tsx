import React from 'react'
import { View, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import styles from './styles'

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Text style={styles.name}>Fulano de tal</Text>
        <Text style={styles.subject}>Quimica</Text> 
        <Text style={styles.bio}>
          Testando a bagaça.
          {'\n'}{'\n'}
          Continuando com um texto para preencher esse espaço. Espaço este que... a, foda-se. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Text> 
        <View style={styles.footer}>
          <Text style={styles.price}>Preço/hora: {'   '}</Text>
          <Text style={styles.priceValue}>200,00</Text>
          <View style={styles.buttonsContainer}>
            <RectButton style={styles.favoriteButton}>
              
            </RectButton>
          </View>
        </View>

      </View>
    </View>
  )
}

export default TeacherItem