import { StyleSheet } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton/RoundedButton';

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
    top: '5%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
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
    height: '58%',
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
  formInput: {
    flexDirection: 'row',
    marginTop: 30,
  },
  formTextInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginLeft: 15,
  },
  formIcon: {
    width: 25,
    height: 25,
    marginTop: 5,
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
});