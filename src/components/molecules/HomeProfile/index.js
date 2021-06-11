import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyUser} from '../../../assets';

const HomeProfile = () => {
  return (
    <View style={styles.profileWrapper}>
      <View>
        <Text style={styles.appName}>FoodMarket</Text>
        <Text style={styles.desc}>Let’s get some foods</Text>
      </View>
      <Image source={DummyUser} style={styles.photo} />
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  photo: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  appName: {
    color: '#020202',
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
  },
  desc: {
    color: '#020202',
    fontFamily: 'Poppins-Light',
    fontSize: 14,
  },
  profileWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
    paddingTop: 30,
    backgroundColor: 'white',
  },
});
