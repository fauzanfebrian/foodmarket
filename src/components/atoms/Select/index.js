import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Select = ({label, value, onValueChange}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input}>
        <Picker
          selectedValue={value}
          onValueChange={itemValue => onValueChange(itemValue)}
          dropdownIconColor="#020202"
          style={{fontFamily: 'Poppins-Regular'}}>
          <Picker.Item label="Bandung" value="Bandung" color="#020202" />
          <Picker.Item label="Bekasi" value="Bekasi" color="#020202" />
          <Picker.Item label="Solo" value="Solo" color="#020202" />
          <Picker.Item label="Jakarta" value="Jakarta" color="#020202" />
        </Picker>
      </View>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  label: {fontSize: 16, fontFamily: 'Poppins-Regular', color: '#020202'},
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    paddingHorizontal: 2,
    paddingVertical: 0,
    marginTop: 6,
    zIndex: 1,
  },
});
