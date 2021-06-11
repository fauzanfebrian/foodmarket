import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ICBack} from '../../../assets';

const Header = ({title, subTitle, onBack}) => {
  return (
    <View style={styles.wrapper}>
      {onBack && (
        <TouchableOpacity
          style={styles.back}
          activeOpacity={0.6}
          onPress={onBack}>
          <ICBack />
        </TouchableOpacity>
      )}
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  wrapper: {
    padding: 24,
    paddingTop: 30,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    color: '#020202',
  },
  subTitle: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    color: '#8D92A3',
  },
  back: {
    marginRight: 10,
    padding: 16,
    marginLeft: -10,
  },
});
