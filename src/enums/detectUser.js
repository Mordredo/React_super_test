const detectUser = (formData, userList) => {
  let userIndex = null;
  let result = null;
  [formData].filter((formElem) => {
    userList.some((storeElem, index) => {
      if (
        formElem.email === storeElem.userMail &&
        formElem.password === storeElem.pass
      ) {
        userIndex = index;
      }
    });

    result = userList[userIndex];
  });

  return result;
};

export default detectUser;
