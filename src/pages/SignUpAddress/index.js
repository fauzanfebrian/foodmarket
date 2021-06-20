import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Gap, Header, Select, TextInput} from '../../components';
import {useForm} from '../../utils';
import {setLoading, signUpAction} from '../../redux/action';

const SignUpAddress = ({navigation}) => {
  const {registerReducer, photoReducer} = useSelector(state => state);
  const dispatch = useDispatch();
  const [form, setForm] = useForm({
    phoneNumber: '',
    address: '',
    houseNumber: '',
    city: 'Jakarta',
  });
  const data = {...form, ...registerReducer};
  const onSubmit = () => {
    dispatch(signUpAction(data, photoReducer, navigation));
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.page}>
      <Header
        title="Address"
        subTitle="Make sure it’s valid"
        onBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <TextInput
          placeholder="Type your phone number"
          label="Phone No."
          value={form.phoneNumber}
          onChangeText={value => setForm('phoneNumber', value)}
        />
        <Gap height={16} />
        <TextInput
          placeholder="Type your address"
          label="Address"
          value={form.address}
          onChangeText={value => setForm('address', value)}
        />
        <Gap height={16} />
        <TextInput
          placeholder="Type your house number"
          label="House no."
          value={form.houseNumber}
          onChangeText={value => setForm('houseNumber', value)}
        />
        <Gap height={16} />
        <Select
          label="City"
          value={form.city}
          onValueChange={value => setForm('city', value)}
        />
        <Gap height={24} />
        <Button title="Sign Up Now" onPress={onSubmit} />
      </View>
    </ScrollView>
  );
};

export default SignUpAddress;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fafafc',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 24,
    paddingTop: 26,
    marginTop: 24,
  },
});
