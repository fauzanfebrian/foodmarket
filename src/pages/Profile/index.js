import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyUser} from '../../assets';
import {ProfileTabSection} from '../../components';
import {getData} from '../../utils';

const Profile = () => {
  const [userProfile, setUserProfile] = useState({});
  useEffect(async () => {
    getData('userProfile').then(res => {
      setUserProfile(res);
    });
  }, []);
  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <View style={styles.photo}>
          <View style={styles.borderPhoto}>
            <Image
              source={{uri: userProfile.profile_photo_url}}
              style={styles.wrapperPhoto}
            />
          </View>
        </View>
        <Text style={styles.name}>{userProfile.name}</Text>
        <Text style={styles.email}>{userProfile.email}</Text>
      </View>
      <ProfileTabSection />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {flex: 1},
  header: {
    paddingTop: 46,
    paddingBottom: 26,
    backgroundColor: 'white',
    marginBottom: 24,
  },
  photo: {alignItems: 'center', marginBottom: 16},
  name: {
    color: '#020202',
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
    marginBottom: 6,
  },
  email: {
    color: '#8D92A3',
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    textAlign: 'center',
  },
  borderPhoto: {
    width: 110,
    height: 110,
    borderRadius: 110,
    borderWidth: 1,
    borderColor: '#8D92A3',
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'dashed',
  },
  wrapperPhoto: {
    width: 90,
    height: 90,
    borderRadius: 90,
    paddingVertical: 24,
    paddingHorizontal: 22,
  },
});
