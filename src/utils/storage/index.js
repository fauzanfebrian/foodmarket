import AsyncStorage from '@react-native-async-storage/async-storage';
import {showMessage} from '../showMessage';

export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    showMessage('Gagal menyimpan data!!');
  }
};

export const getData = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    showMessage('Gagal membaca data!!');
  }
};
