import { createStore, applyMiddleware } from "redux";

import * as constants from "./storeConstants";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const INITIAL_STATE = {
  userList: [
    {
      id: 1,
      fullName: "Vadim Vozniuk",
      userMail: "test@test.ru",
      pass: "123456Aa",
      isAdmin: false,
      sessionToken: "",
    },
    {
      id: 2,
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
    case constants.UPDATE_USER:
      const { Id, token } = payload;
      const copyUserList = [...state.userList];
      const currentMember = copyUserList[Id - 1];
      if (currentMember) {
        currentMember["sessionToken"] = token;
        return {
          ...state,
          userList: copyUserList,
        };
      }
      return state;
      break;
    default:
      return state;
  }
}

const persistedReducer = persistReducer(persistConfig, userList);

export default () => {
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);
  return { store, persistor };
};
