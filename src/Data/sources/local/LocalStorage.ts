import AsyncStorage from "@react-native-async-storage/async-storage";


export const LocalStorage = () => {
  const save = async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.error('Error saving data in localStorage', error);
    }
  }

  const get = async (key: string) => {
    try {
      return await AsyncStorage.getItem(key);
    } catch (error) {
      console.error('Error getting data in localStorage', error);
    }
  }

  const remove = async (key: string) => {
    try {
      return await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing data in localStorage', error);
    }
  }

  return {
    save,
    get,
    remove
  }
};