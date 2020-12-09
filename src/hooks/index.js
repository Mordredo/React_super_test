import { useEffect, useState } from "react";

const useToken = () => {
  const sessionToken = sessionStorage.getItem("token");
  // const [token, setToken] = useState(null);

  // useEffect(() => {
  //   setToken(sessionToken);
  // }, [sessionToken]);

  return sessionToken;
};

export default useToken;
