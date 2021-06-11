import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Button = ({title, type, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.wrapper(type)}
      onPress={onPress}
      activeOpacity={0.6}>
      <Text style={styles.title(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  wrapper: type => {
    let backgroundColor = '';
    switch (type) {
      case 'secondary':
        backgroundColor = '#8D92A3';
        break;
      case 'warning':
        backgroundColor = '#D9435E';
        break;
      default:
        backgroundColor = '#ffc700';
        break;
    }
    return {
      backgroundColor,
      height: 45,
      paddingVertical: 12,
      alignItems: 'center',
      borderRadius: 8,
    };
  },
  title: type => {
    let color = '';
    switch (type) {
      case 'secondary':
        color = '#FFFFFF';
        break;
      case 'warning':
        color = '#FFFFFF';
        break;
      default:
        color = '#020202';
        break;
    }
    return {
      fontFamily: 'Poppins-Medium',
      fontSize: 14,
      color,
    };
  },
});
