const initialState = {
  user_id: 0,
  email: "",
  profile_pic: "",
  playlist_uri: "",
};

const UPDATE_USER = "UPDATE_USER";
const LOGOUT_USER = "LOGOUT_USER";

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

export default function userReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_USER:
      const { customer_id, email, profile_pic, playlist_uri } = payload;
      return { ...state, customer_id, email, profile_pic, playlist_uri};

    case LOGOUT_USER:
      return state;

    default:
      return state;
  }
}
