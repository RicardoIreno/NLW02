import { Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: '#8257e5',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  goBack: {
    //  fontFamily: 'Poppins_600SemiBold'
  },
  title: {
    //  fontFamily: 'Poppins_600SemiBold',
    color: '#fff',
    fontSize: 24,
    lineHeight: 32,
    maxWidth: 160,
    marginVertical: 40,

  }

})

export default styles