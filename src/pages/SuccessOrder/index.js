import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILSuccessOrder} from '../../assets';
import {Button, Gap} from '../../components';

const SuccessOrder = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.ilustration}>
        <ILSuccessOrder />
      </View>
      <Gap height={30} />
      <Text style={styles.title}>You’ve Made Order</Text>
      <Gap height={6} />
      <Text style={styles.subTitle}>
        Just stay at home while we are preparing your best foods
      </Text>
      <Gap height={30} />
      <Button
        title="Order Other Food"
        onPress={() => navigation.replace('MainApp')}
      />
      <Gap height={12} />
      <Button
        title="View My Order"
        type="secondary"
        onPress={() => navigation.replace('MainApp', {screen: 'Order'})}
      />
    </View>
  );
};

export default SuccessOrder;

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 80,
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    color: '#020202',
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
  subTitle: {
    color: '#8D92A3',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
  ilustration: {alignItems: 'center'},
});
