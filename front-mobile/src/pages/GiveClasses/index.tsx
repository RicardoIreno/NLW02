import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

import styles from './styles'

function GiveClasses() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleBold}>Oi, eu sou o GiveClasses</Text>
    </View>
  )
}

export default GiveClasses