import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    opacity: 0.8,
    bottom: '25%',
  },
  logoContainer: {
    position: 'absolute',
    top: '20%',
    alignSelf: 'center',
  },
  logoImage: {
    width: 100,
    height: 100,
  },
  logoText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  formContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    bottom: 0,
    height: '40%',
    padding: 20,
    position: 'absolute',
    width: '100%',
  },
  formText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'left',
  },
  formButton: {
    backgroundColor: '#000',
    borderRadius: 20,
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 30,
    padding: 15,
  },
  formRegister: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  formRegisterText: {
    color: 'orange',
    fontWeight: 'bold',
    marginLeft: 10,
    fontStyle: 'italic',
    borderBottomWidth: 1,
    borderBottomColor: 'orange',
  },
});
