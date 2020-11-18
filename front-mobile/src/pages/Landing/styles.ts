import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#c9ffba',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    //  fontFamily: 'Archivo_400Regular'
  },

  titleBold: {
    //  fontFamily: 'Poppins_600SemiBold'
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: "space-between",
  },


  button: {
    width: '42%',
    height: 100,
    borderRadius: 15,
    justifyContent: 'center',
    alignContent: 'center'

  },

  buttonPrimary: {
    backgroundColor: '#6dde40',
  }

})

export default styles