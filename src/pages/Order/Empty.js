import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILOrderEmpty} from '../../assets';
import {Button, Gap} from '../../components';

const Empty = ({}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.page}>
      <View style={styles.ilustration}>
        <ILOrderEmpty />
      </View>
      <Gap height={30} />
      <Text style={styles.title}>Ouch! Hungry</Text>
      <Gap height={6} />
      <Text style={styles.subTitle}>
        Seems like you have not ordered any food yet
      </Text>
      <Gap height={30} />
      <Button
        title="Find Foods"
        onPress={() => navigation.replace('MainApp')}
      />
    </View>
  );
};

export default Empty;

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
