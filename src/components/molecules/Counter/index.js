import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ICMin, ICPlus} from '../../../assets';

const Counter = ({onChangeValue}) => {
  const [value, setValue] = useState(1);
  useEffect(() => {
    onChangeValue(value);
  }, [value]);

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        activeOpacity={0.45}
        onPress={() => value > 1 && setValue(value - 1)}>
        <ICMin />
      </TouchableOpacity>
      <Text style={styles.num}>{value}</Text>
      <TouchableOpacity
        activeOpacity={0.45}
        onPress={() => setValue(value + 1)}>
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
