import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {useDispatch} from 'react-redux';
import {Button, Gap, Header, TextInput} from '../../components';
import {showMessage, useForm} from '../../utils';

const SignUp = ({navigation}) => {
  const dispatch = useDispatch();
  const [form, setForm] = useForm({
    name: '',
    email: '',
    password: '',
  });
  const [photo, setPhoto] = useState();
  const onSubmit = () => {
    dispatch({type: 'SET_REGISTER', value: form});
    navigation.navigate('SignUpAddress');
  };
  const addPhoto = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 0.5,
        maxHeight: 200,
        maxWidth: 200,
      },
      response => {
        if (response.didCancel || response.errorMessage || response.errorCode) {
          showMessage(response.errorMessage ?? 'Anda belum memilih foto?');
        } else {
          const photo = response.assets[0];
          const dataImage = {
            uri: photo.uri,
            type: photo.type,
            name: photo.fileName,
          };
          setPhoto(photo.uri);
          dispatch({type: 'SET_PHOTO', value: dataImage});
          dispatch({type: 'SET_UPLOAD_STATUS', value: true});
        }
      },
    );
  };
  return (
    <ScrollView style={styles.page} showsVerticalScrollIndicator={false}>
      <Header
        title="Sign Up"
        subTitle="Register and eat"
        onBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <TouchableOpacity style={styles.photo} onPress={addPhoto}>
          <View style={styles.borderPhoto}>
            {photo ? (
              <Image source={{uri: photo}} style={styles.wrapperPhoto} />
            ) : (
              <View style={styles.wrapperPhoto}>
                <Text style={styles.addPhoto}>Add Photo</Text>
              </View>
            )}
          </View>
        </TouchableOpacity>
        <TextInput
          placeholder="Type your full name"
          label="Full Name"
          value={form.name}
          onChangeText={value => setForm('name', value)}
        />
        <Gap height={16} />
        <TextInput
          placeholder="Type your email"
          label="Email"
          value={form.email}
          onChangeText={value => setForm('email', value)}
        />
        <Gap height={16} />
        <TextInput
          placeholder="Type your password"
          label="Password"
          value={form.password}
          onChangeText={value => setForm('password', value)}
          secureTextEntry
        />
        <Gap height={24} />
        <Button title="Continue" onPress={onSubmit} />
      </View>
    </ScrollView>
  );
};

export default SignUp;

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
  photo: {
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 16,
  },
  borderPhoto: {
    width: 110,
    height: 110,
    borderRadius: 110,
    borderWidth: 1,
    borderColor: '#8D92A3',
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'dashed',
  },
  wrapperPhoto: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addPhoto: {
    textAlign: 'center',
    color: '#8D92A3',
    fontFamily: 'Poppins-Light',
    fontSize: 14,
  },
});
