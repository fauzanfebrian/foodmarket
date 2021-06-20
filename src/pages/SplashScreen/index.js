import axios from 'axios';
import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import {Gap} from '../../components';
import {getData} from '../../utils';

const SplashScreen = ({navigation}) => {
  useEffect(async () => {
    const token = await getData('token');
    const userProfile = await getData('userProfile');
    if (!token)
      return setTimeout(() => {
        navigation.reset({index: 0, routes: [{name: 'SignIn'}]});
      }, 1500);
    const getProfile = await axios.get(
      'http://foodmarket-backend.buildwithangga.id/api/user',
      {
        headers: {Authorization: token.value},
      },
    );
    getProfile.data.data.email === userProfile.email &&
      navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
  }, []);

  return (
    <View style={styles.page}>
      <ILLogo />
      <Gap height={30} />
      <Text style={styles.text}>FoodMarket</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffc700',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
    color: '#020202',
    fontFamily: 'Poppins-Medium',
  },
});
