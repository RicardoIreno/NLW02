import { StyleSheet } from 'react-native'
import { Archivo_400Regular } from '@expo-google-fonts/archivo'
import { Poppins_600SemiBold } from '@expo-google-fonts/poppins'

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#c9ffba',
  },

  teacherList: {
    marginTop: -40,
  },

  title: {
    // //  fontFamily: 'Archivo_400Regular'
  },

  titleBold: {
    //  fontFamily: 'Poppins_600SemiBold'
  },

  buttonContainer: {
    width: '50%',
    height: 150,
    borderRadius: 10,
    padding: 24,
    justifyContent: "space-between"
  },

  buttonPrimary: {
    backgroundColor: '#6dde40',
  }

})

export default styles