const initialState = {
  user_id: 0,
  email: "",
  profile_pic: "",
  playlist_uri: "",
  accessToken: null,
};

const UPDATE_USER = "UPDATE_USER";
const LOGOUT_USER = "LOGOUT_USER";
const SET_ACCESS_TOKEN = "SET_ACCESS_TOKEN";

export function updateUser(userObj) {
  return {
    type: UPDATE_USER,
    payload: userObj,
  };
}

export function logoutUser() {
  return {
    type: LOGOUT_USER,
    payload: {},
  };
}

export function setAccessToken(accessToken) {
  return {
    type: SET_ACCESS_TOKEN,
    payload: accessToken,
  };
}

export default function userReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_USER:
      const { customer_id, email, profile_pic, playlist_uri } = payload;
      return { ...state, customer_id, email, profile_pic, playlist_uri };

    case LOGOUT_USER:
      return state;

    case SET_ACCESS_TOKEN:
      return { ...state, accessToken: payload };

    default:
      return state;
  }
}
