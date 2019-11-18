import * as actionType from "./actionTypes";

export function fetchUsers() {
    return dispatch => {
        return fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/smartQFood8bef5a2.json')
            .then(response => {

                if (response.status !== 200) {
                    return;
                }

                response.json().then(responseBody => {

                    dispatch({
                        type: actionType.FETCH_FOODLIST,
                        payload: responseBody
                    });
                });
            })
            .catch(err => {
                console.log(err);
            });
    }
}

// export function setUserDetail(user) {
//     return dispatch => {
//         dispatch({
//             type: actionType.SET_USER_DETAIL,
//             payload: user
//         })
//     }
// }