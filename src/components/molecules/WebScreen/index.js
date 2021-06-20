import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {WebView} from 'react-native-webview';
import {ICClose} from '../../../assets';
import Loading from '../Loading';

const WebScreen = ({onNavigationStateChange, source, onClose}) => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const stateChange = state => {
    onNavigationStateChange(state);
    setTitle(state.title + '');
    setUrl(state.url);
  };
  return (
    <>
      {url !== '' && title !== '' && (
        <View style={styles.header}>
          <TouchableOpacity onPress={onClose}>
            <ICClose />
          </TouchableOpacity>
          <View>
            <Text style={styles.text}>{title}</Text>
            <Text style={styles.url}>{url}</Text>
          </View>
        </View>
      )}
      <WebView
        source={source}
        startInLoadingState={true}
        renderLoading={() => <Loading />}
        onNavigationStateChange={stateChange}
      />
    </>
  );
};

export default WebScreen;

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderBottomColor: '#f0f0f0',
    borderBottomWidth: 1,
    overflow: 'hidden',
  },
  text: {
    color: '#020202',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    marginLeft: 8,
  },
  url: {
    marginTop: -2,
    color: '#8D92A3',
    fontFamily: 'Poppins-Light',
    fontSize: 12,
    marginLeft: 8,
    overflow: 'hidden',
    height: 18,
    maxWidth: '85%',
  },
});
