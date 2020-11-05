import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#c9ffba',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontFamily: 'Archivo_400Regular'
  },

  titleBold: {
    fontFamily: 'Poppins_600SemiBold'
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