import React, { ReactNode } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import { BorderlessButton } from 'react-native-gesture-handler'

import { useNavigation } from '@react-navigation/native'
 
interface PageHeaderProps {
  title: string
  headerRight?: ReactNode
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, headerRight, children }) => {
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
      <View style={styles.header}>

        <Text style={styles.title} >{title}</Text>
        { headerRight }

      </View>

        { children }

    </View>
  )
}

export default PageHeader