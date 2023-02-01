import axios from "axios";
import { useEffect, useState } from "react";

function AxiosWithUseEffect() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    axios
      .get("https://jsonplaceholder.typicode.com/users", {
        cancelToken: cancelToken.token,
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log("Cancelled");
        } else {
          console.log(err.message);
        }
      });

    return () => {
      cancelToken.cancel();
    };
  }, []);

  console.log(user);
  return <div>AxiosWithUseEffect</div>;
}

export default AxiosWithUseEffect;
