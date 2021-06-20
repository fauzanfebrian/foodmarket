import axios from 'axios';
import {HOST_NAME} from '../../config';
import {getData} from '../../utils';

export const getOrders = () => async dispatch => {
  try {
    const {value: token} = await getData('token');
    const transaction = await axios.get(`${HOST_NAME.api}/transaction`, {
      headers: {Authorization: token},
    });
    dispatch({type: 'SET_ORDERS', value: transaction.data.data.data});
  } catch (err) {}
};
export const getInProgress = () => async dispatch => {
  try {
    const {value: token} = await getData('token');
    axios
      .all([
        axios.get(`${HOST_NAME.api}/transaction?status=PENDING`, {
          headers: {Authorization: token},
        }),
        axios.get(`${HOST_NAME.api}/transaction?status=SUCCESS`, {
          headers: {Authorization: token},
        }),
        axios.get(`${HOST_NAME.api}/transaction?status=ON_DELIVERY`, {
          headers: {Authorization: token},
        }),
      ])
      .then(
        axios.spread((res1, res2, res3) => {
          const pending = res1.data.data.data;
          const success = res2.data.data.data;
          const onDelivery = res3.data.data.data;
          dispatch({
            type: 'SET_IN_PROGRESS',
            value: [...pending, ...success, ...onDelivery],
          });
        }),
      );
  } catch (err) {}
};
export const getPastOrders = () => async dispatch => {
  try {
    const {value: token} = await getData('token');
    axios
      .all([
        axios.get(`${HOST_NAME.api}/transaction?status=CANCELLED`, {
          headers: {Authorization: token},
        }),
        axios.get(`${HOST_NAME.api}/transaction?status=DELIVERED`, {
          headers: {Authorization: token},
        }),
      ])
      .then(
        axios.spread((res1, res2) => {
          const cancelled = res1.data.data.data;
          const delivered = res2.data.data.data;
          dispatch({
            type: 'SET_PAST_ORDERS',
            value: [...cancelled, ...delivered],
          });
        }),
      );
  } catch (err) {}
};
