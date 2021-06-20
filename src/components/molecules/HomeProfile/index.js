import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyUser} from '../../../assets';
import {getData} from '../../../utils';

const HomeProfile = () => {
  const [photo, setPhoto] = useState(DummyUser);
  useEffect(() => {
    getData('userProfile').then(res => {
      setPhoto({uri: res.profile_photo_path ?? res.profile_photo_url});
    });
  }, []);
  return (
    <View style={styles.profileWrapper}>
      <View>
        <Text style={styles.appName}>FoodMarket</Text>
        <Text style={styles.desc}>Let’s get some foods</Text>
      </View>
      <Image source={photo} style={styles.photo} />
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
