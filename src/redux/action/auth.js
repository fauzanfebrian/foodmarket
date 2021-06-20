import axios from 'axios';
import {HOST_NAME} from '../../config';
import {showMessage, storeData} from '../../utils';
import {setLoading} from './global';

export const signUpAction = (
  dataRegister,
  photoReducer,
  navigation,
) => async dispatch => {
  try {
    const register = await axios.post(
      `${HOST_NAME.api}/register`,
      dataRegister,
    );
    const token = `${register.data.data.token_type} ${register.data.data.access_token}`;
    const profile = register.data.data.user;

    const photoForUpload = new FormData();
    photoForUpload.append('file', photoReducer);

    if (photoReducer.isUploadPhoto) {
      try {
        const upload_photo = await axios.post(
          `${HOST_NAME.api}/user/photo`,
          photoForUpload,
          {
            headers: {
              Authorization: token,
              'Content-Type': 'multipart/form-data',
            },
          },
        );
        profile.profile_photo_path = `${HOST_NAME.storage}/${upload_photo.data.data[0]}`;
      } catch (err) {
        showMessage('Photo tidak berhasil diupload');
      }
    }
    storeData('userProfile', profile);
    storeData('token', {value: token});
    dispatch(setLoading(false));
    navigation.reset({
      index: 0,
      routes: [{name: 'SuccessSignUp'}],
    });
  } catch (err) {
    dispatch(setLoading(false));
    showMessage(err?.response?.data?.message ?? 'Ada kesalahan!!');
  }
};

export const signInAction = (form, navigation) => async dispatch => {
  try {
    dispatch(setLoading(true));
    const login = await axios.post(`${HOST_NAME.api}/login`, form);
    const token = `${login.data.data.token_type} ${login.data.data.access_token}`;
    const profile = login.data.data.user;

    profile.profile_photo_path = `${HOST_NAME.storage}/${profile.profile_photo_path}`;

    storeData('userProfile', profile);
    storeData('token', {value: token});
    dispatch(setLoading(false));
    navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
  } catch (err) {
    dispatch(setLoading(false));
    showMessage(err?.response?.data?.message ?? 'Ada kesalahan!!');
  }
};
