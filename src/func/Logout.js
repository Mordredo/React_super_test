import React from "react";

const Logout = (userList) => {
  let result = null;
  userList.some((storeElem) => {
    if (storeElem.sessionToken.length > 0) {
      result = storeElem;
    }
  });

  return result;
};

export default Logout;
