import axios from 'axios';
import {HOST_NAME} from '../../config';

export const getFoodData = () => async dispatch => {
  const res = await axios.get(`${HOST_NAME.api}/food`);
  dispatch({value: res.data.data.data, type: 'SET_FOOD'});
};
export const getFoodDataByTypes = types => async dispatch => {
  const res = await axios.get(`${HOST_NAME.api}/food?types=${types}`);
  if (types === 'new_food')
    dispatch({value: res.data.data.data, type: 'SET_NEW_TASTE'});
  else if (types === 'popular')
    dispatch({value: res.data.data.data, type: 'SET_POPULAR'});
  else if (types === 'recommended')
    dispatch({value: res.data.data.data, type: 'SET_RECOMMENDED'});
};
