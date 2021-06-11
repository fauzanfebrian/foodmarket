import axios from 'axios';
import {showMessage} from '../../utils';
import {setLoading} from './global';

export const signUpAction =
  (dataRegister, photoReducer, navigation) => dispatch => {
    const API_HOST = {url: 'http://foodmarket-backend.buildwithangga.id/api'};
    axios
      .post(`${API_HOST}/register`, dataRegister)
      .then(res => {
        const photoForUpload = new FormData();
        photoForUpload.append('file', photoReducer);
        if (photoReducer.isUploadPhoto) {
          axios
            .post(`${API_HOST}/user/photo`, photoForUpload, {
              headers: {
                Authorization: `${res.data.data.token_type} ${res.data.data.access_token}`,
                'Content-Type': 'multipart/form-data',
              },
            })
            .then(res => {
              console.log(res.data);
            })
            .catch(() => {
              showMessage('Photo tidak berhasil diupload');
            });
        }
        dispatch(setLoading(false));
        navigation.replace('SuccessSignUp');
      })
      .catch(err => {
        dispatch(setLoading(false));
        showMessage(err?.response?.data?.message);
      });
  };
