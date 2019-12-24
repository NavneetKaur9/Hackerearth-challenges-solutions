import * as actionType from './actionTypes';

export function fetchFoodList() {
  return (dispatch) => {
    return fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/smartQFood8bef5a2.json')
      .then((response) => {
        if (response.status !== 200) {
          return;
        }

        response.json().then((responseBody) => {
          dispatch(setFoodList(responseBody));
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function setFoodList(data) {
  return dispatch => {
    dispatch({
      type: actionType.FETCH_FOODLIST,
      payload: data,
    });
  }
}

export function updateTotalPrice(price) {
  return dispatch => {
    dispatch({
      type: actionType.UPDATE_TOTAL_PRICE,
      payload: price,
    });
  }
}
