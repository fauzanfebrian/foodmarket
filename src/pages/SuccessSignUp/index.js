import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILSuccessSignUp} from '../../assets';
import {Button, Gap} from '../../components';

const SuccesSignUp = ({navigation}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.ilustration}>
        <ILSuccessSignUp />
      </View>
      <Gap height={30} />
      <Text style={styles.title}>Yeay! Completed</Text>
      <Gap height={6} />
      <Text style={styles.subTitle}>
        Now you are able to order some foods as a self-reward
      </Text>
      <View style={styles.buttonWrapper}>
        <Button
          title="Find Foods"
          onPress={() => navigation.replace('MainApp')}
        />
      </View>
    </View>
  );
};

export default SuccesSignUp;

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  ilustration: {
    alignItems: 'center',
  },
  title: {
    color: '#020202',
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
  subTitle: {
    color: '#8D92A3',
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    textAlign: 'center',
    paddingHorizontal: 80,
  },
  buttonWrapper: {width: '100%', paddingHorizontal: 80, marginTop: 30},
});
