import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ICNext} from '../../../assets';

const ItemListMenu = ({label}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <ICNext />
    </TouchableOpacity>
  );
};

export default ItemListMenu;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center', marginBottom: 10},
  label: {
    fontSize: 14,
    color: '#020202',
    fontFamily: 'Poppins-Regular',
    flex: 1,
  },
});
