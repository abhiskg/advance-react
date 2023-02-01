import { useEffect, useState } from "react";

function FetchWithUseEffect() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://jsonplaceholder.typicode.com/users", { signal })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Cancelled AbortError");
        } else {
          console.log(err.message);
        }
      });

    return () => {
      controller.abort();
    };
  }, []);

  console.log(user);

  //   useEffect(() => {
  //     let unSubscribe = false;
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (!unSubscribe) {
  //           setUser(data);
  //         }
  //       });

  //     return () => {
  //       unSubscribe = true;
  //     };
  //   }, []);

  return <h1>Hello</h1>;
}

export default FetchWithUseEffect;
