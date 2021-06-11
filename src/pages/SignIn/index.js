import axios from 'axios';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {showMessage} from '../../utils';
import {useDispatch} from 'react-redux';
import {Button, Gap, Header, TextInput} from '../../components';
import {useForm} from '../../utils';

const SignIn = ({navigation}) => {
  const dispatch = useDispatch();
  const [form, setForm] = useForm({email: '', password: ''});
  const submit = async () => {
    dispatch({type: 'SET_LOADING', value: true});
    axios
      .post('http://foodmarket-backend.buildwithangga.id/api/login', form)
      .then(res => {
        setForm('reset');
        dispatch({type: 'SET_LOADING', value: false});
        showMessage('Berhasil', 'success');
      })
      .catch(err => {
        dispatch({type: 'SET_LOADING', value: false});
        showMessage(err?.response?.data?.message);
      });
  };

  return (
    <View style={styles.page}>
      <Header title="Sign In" subTitle="Find your best ever meal" />
      <View style={styles.container}>
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
          value={form.email}
          onChangeText={value => setForm('email', value)}
        />
        <Gap height={16} />
        <TextInput
          label="Password"
          placeholder="Type your password"
          value={form.password}
          onChangeText={value => setForm('password', value)}
          secureTextEntry
        />
        <Gap height={24} />
        <Button title="Sign In" onPress={submit} />
        <Gap height={12} />
        <Button
          title="Create New Account"
          type="secondary"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fafafc',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
  },
});
