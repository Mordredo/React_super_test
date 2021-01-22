import { useSelector } from "react-redux";

const useToken = () => {
  const userList = useSelector((state) => state.userList);
  let sessionToken = null;
  userList.some((storeElem, index) => {
    if (storeElem.sessionToken.length > 0) {
      sessionToken = storeElem.sessionToken;
    }
  });

  return sessionToken;
};

export default useToken;
