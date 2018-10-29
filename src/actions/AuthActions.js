import axios from 'axios';
import { AUTH_ERROR,AUTH_USER } from './types';

export const signin = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(
      '/api/auth',
      formProps
    );

    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Invalid login credentials' });
  }
};
