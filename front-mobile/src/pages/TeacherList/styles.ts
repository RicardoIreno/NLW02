import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#e8e8e8',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  teacherList: {
    marginTop: -60,
  },

  searchForm: {
    marginBottom: 24,
  
  },
  
  label: {
    color: '#d4c2ff',
    //  fontFamily: 'Poppins_400Regular',
  },

  input: {
    height: 54,
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal:16,
    marginTop: 4,
    marginBottom: 16,
  },

  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  inputBlock: {
    width: '48%',
  },

  submitButton: {
    backgroundColor: '#04d361',
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center', 
  },

  submitButtonText: {
    color: '#fff',
    // //  fontFamily: 'Archivo_700Bold',
    fontSize: 16,
  },


  // title: {
  //   //  fontFamily: 'Archivo_400Regular'
  // },

  // titleBold: {
  //   //  fontFamily: 'Poppins_600SemiBold'
  // },

  // buttonContainer: {
  //   width: '50%',
  //   height: 150,
  //   borderRadius: 10,
  //   padding: 24,
  //   justifyContent: "space-between"
  // },

  // buttonPrimary: {
  //   backgroundColor: '#6dde40',
  // }

})

export default styles