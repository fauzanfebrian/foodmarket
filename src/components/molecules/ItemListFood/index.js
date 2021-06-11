import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Rating from '../Rating';

const ItemListFood = ({
  image,
  onPress,
  rating,
  items,
  price,
  type,
  name,
  time,
  status,
}) => {
  const renderContent = type => {
    switch (type) {
      case 'product':
        return (
          <>
            <View>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.desc}>IDR {price}</Text>
            </View>
            <View style={styles.starContainer}>
              <Rating rating={rating} />
            </View>
          </>
        );
      case 'order-summary':
        return (
          <>
            <View>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.desc}>IDR {price}</Text>
            </View>
            <View style={styles.starContainer}>
              <Text style={styles.desc}>{items} items</Text>
            </View>
          </>
        );
      case 'in-progress':
        return (
          <>
            <View>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.desc}>
                {items} items • IDR {price}
              </Text>
            </View>
          </>
        );
      case 'past-orders':
        return (
          <>
            <View>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.desc}>
                {items} items • IDR {price}
              </Text>
            </View>
            <View style={styles.starContainer}>
              {time && <Text style={styles.time}>{time}</Text>}
              {status && <Text style={styles.status}>{status}</Text>}
            </View>
          </>
        );
      default:
        return (
          <>
            <View>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.desc}>IDR {price}</Text>
            </View>
            <View style={styles.starContainer}>
              <Rating rating={rating} />
            </View>
          </>
        );
    }
  };

  return (
    <TouchableOpacity
      style={styles.wrapper}
      activeOpacity={0.65}
      onPress={onPress}>
      <Image source={image} style={styles.photo} />
      {renderContent(type)}
    </TouchableOpacity>
  );
};

export default ItemListFood;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 8,
  },
  photo: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 16,
    backgroundColor: '#FAFAFC',
  },
  starContainer: {alignItems: 'flex-end', flex: 1},
  name: {fontSize: 16, color: '#020202', fontFamily: 'Poppins-Regular'},
  desc: {fontSize: 13, color: '#8D92A3', fontFamily: 'Poppins-Regular'},
  time: {fontSize: 10, color: '#8D92A3', fontFamily: 'Poppins-Regular'},
  status: {fontSize: 10, color: '#D9435E', fontFamily: 'Poppins-Regular'},
});
