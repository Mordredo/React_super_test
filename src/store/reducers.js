import { createStore, applyMiddleware } from "redux";

import * as constants from "./storeConstants";

const INITIAL_STATE = {
  userList: [
    {
      fullName: "Vadim Vozniuk",
      userMail: "test@test.ru",
      pass: "123456Aa",
      isAdmin: false,
      sessionToken: "",
    },
    {
      fullName: "Test user",
      userMail: "user@user.ru",
      pass: "123456Aa",
      isAdmin: false,
      sessionToken: "",
    },
  ],
};

function userList(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case constants.SET_USER:
      return { ...state, userList: [...state.userList, payload] };
      break;
    default:
      return state;
  }
}

const store = createStore(userList);

export default store;
