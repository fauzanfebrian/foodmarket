import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput as TextInputRN,
  TouchableOpacity,
} from 'react-native';
import {ICHidePassword, ICShowPassword} from '../../../assets';

const TextInput = ({label, placeholder, secureTextEntry, ...restProps}) => {
  const [securePassword, setSecurePassword] = useState(secureTextEntry);

  const EyeIcon = () =>
    securePassword ? <ICHidePassword /> : <ICShowPassword />;

  useEffect(() => {
    if (secureTextEntry && (restProps.value + '').length == 0)
      setSecurePassword(true);
  }, [restProps.value]);
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.containerTextInput}>
        <TextInputRN
          placeholder={placeholder}
          placeholderTextColor="#8D92A3"
          style={styles.textInput}
          secureTextEntry={securePassword}
          {...restProps}
        />
        {secureTextEntry && (restProps.value + '').length > 0 && (
          <View style={styles.containerHideAndShow}>
            <TouchableOpacity
              style={styles.hideAndShow}
              onPress={() => {
                setSecurePassword(!securePassword);
              }}>
              <EyeIcon />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {fontSize: 16, fontFamily: 'Poppins-Regular', color: '#020202'},
  textInput: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    padding: 10,
    color: '#020202',
  },
  hideAndShow: {
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerHideAndShow: {
    position: 'absolute',
    height: '100%',
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerTextInput: {position: 'relative', marginTop: 6},
});
