import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Rating from '../Rating';

const FoodCard = ({image, onPress, name, rating}) => {
  return (
    <TouchableOpacity
      style={styles.wrapper}
      activeOpacity={0.65}
      onPress={onPress}>
      <Image source={image} style={styles.photo} />
      <View style={styles.container}>
        <Text style={styles.text}>{name}</Text>
        <Rating rating={rating} />
      </View>
    </TouchableOpacity>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  wrapper: {
    width: 200,
    borderRadius: 8,
    backgroundColor: 'white',
    marginRight: 24,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 7},
    shadowOpacity: 0.5,
    elevation: 14,
    overflow: 'hidden',
  },
  container: {padding: 12},
  photo: {width: '100%', height: 140, resizeMode: 'cover'},
  text: {
    color: '#020202',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    marginBottom: 6,
  },
});
