import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import { BorderlessButton } from 'react-native-gesture-handler'

import { useNavigation } from '@react-navigation/native'
 
interface PageHeaderProps {
  title: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  const { navigate } = useNavigation()

  function handleGoBack(){
    navigate('Landing')
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleGoBack}>
          <Text style={styles.goBack}>Voltar</Text>
        </BorderlessButton>
        <Text>Proffy</Text>
      </View>
        <Text style={styles.title} >{title}</Text>
    </View>
  )
}

export default PageHeader