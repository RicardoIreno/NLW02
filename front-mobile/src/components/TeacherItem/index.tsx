import React from 'react'
import { View, Text, Image } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import styles from './styles'

import whatsappIcon from '../../assets/img/whatsapp.png'
import profilePhotoTemp from '../../assets/img/profile.png'
import heartIcon from '../../assets/img/heart.png'

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        
       <View style={styles.header}>
       
        <Image style={styles.avatar} source={profilePhotoTemp} />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Cassimiro</Text>
          <Text style={styles.subject}>Quimica</Text> 
        </View>

       </View>

        <Text style={styles.bio}>
          Testando.
          {'\n'}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Text> 
       
        <View style={styles.footer}>
          
          <View style={styles.price}>
          
            <Text>Preço/hora: {'   '}</Text>
            <Text style={styles.priceValue}>200,00</Text>

          </View>
         
          <View style={styles.buttonsContainer}>
          
            <RectButton style={styles.favoriteButton}>
              <Image source={heartIcon} />
            </RectButton>
           
            <RectButton style={styles.contactButton}>
              <Image source={whatsappIcon} />
              <Text style={styles.contactButtonText}>Entrar em contato</Text>
            </RectButton>
         
          </View>
        </View>

      </View>
    </View>
  )
}

export default TeacherItem