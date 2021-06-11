import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="#1abc9c" size="large" />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 1000,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.5)',
    width: '100%',
    height: '100%',
  },
  text: {
    textAlign: 'center',
    color: '#1abc9c',
    fontSize: 24,
    fontFamily: 'Poppins-Regular',
    marginTop: 6,
  },
});
