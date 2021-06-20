import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ICstarOff, ICStarOn} from '../../../assets';
import Number from '../Number';

const Rating = ({rating}) => {
  const renderStar = () => {
    let star = [];
    for (let i = 1; i <= 5; i++) {
      i <= rating
        ? star.push(<ICStarOn key={i} />)
        : star.push(<ICstarOff key={i} />);
    }
    return star;
  };
  return (
    <View style={styles.starWrapper}>
      {renderStar()}
      <Number number={rating} type="decimal" style={styles.rate} />
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
