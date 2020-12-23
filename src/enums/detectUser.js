import React from "react";

const detectUser = (formData, userList) => {
  const result = [formData].filter((formElem) =>
    userList.some(
      (storeElem) =>
        formElem.email === storeElem.userMail &&
        formElem.password === storeElem.pass
    )
  );

  return !!result.length;
};

export default detectUser;
