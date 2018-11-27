import {
    GET_USERS,
    DELETE_USER,
    ADD_USER,
    GET_USER,
    UPDATE_USER
  } from "../actions/types";

  const initialState = {
    users: [],
    user: {}
  };

  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_USERS:
        return {
          ...state,
          users: action.payload.data
        };
      case DELETE_USER:
        return {
          ...state,
          users: state.users.filter(
            user => user.id !== action.payload.data
          )
        };
      case ADD_USER:
        return {
          ...state,
          users: [action.payload.data, ...state.users]
        };
      case GET_USER:
        return {
          ...state,
        user: action.payload.data
        };
      case UPDATE_USER:
        return {
          ...state,
          users: state.users.map(
            user =>
              user.id === action.payload.data.id
                ? (user = action.payload.data)
                : user
          )
        };
      default:
        return state;
    }
  }