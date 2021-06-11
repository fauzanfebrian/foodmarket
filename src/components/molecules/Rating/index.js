import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ICstarOff, ICStarOn} from '../../../assets';

const Rating = () => {
  return (
    <View style={styles.starWrapper}>
      <ICStarOn />
      <ICStarOn />
      <ICStarOn />
      <ICStarOn />
      <ICstarOff />
      <Text style={styles.rate}>4.5</Text>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  rate: {
    color: '#8D92A3',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    marginLeft: 4,
  },
  starWrapper: {flexDirection: 'row'},
});
