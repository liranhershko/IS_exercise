import axios from 'axios';
import {
  FETCH_DATA
} from './types';

const ROOT_URL = 'http://localhost:3090';

export function fetchData() {
  return function(dispatch) {
    axios.get(ROOT_URL)
      .then(response => {
        dispatch({
          type: FETCH_DATA,
          payload: response.data.dashboard
        });
      });
  }
}
