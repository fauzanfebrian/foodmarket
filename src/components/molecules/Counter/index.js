import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ICMin, ICPlus} from '../../../assets';

const Counter = () => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity activeOpacity={0.45}>
        <ICMin />
      </TouchableOpacity>
      <Text style={styles.num}>14</Text>
      <TouchableOpacity activeOpacity={0.45}>
        <ICPlus />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
  },
  num: {
    color: '#020202',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    marginHorizontal: 10,
  },
});
