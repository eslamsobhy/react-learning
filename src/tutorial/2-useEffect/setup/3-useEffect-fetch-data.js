import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

// Second argument

// async will always return a promise
// await will wait until the promise is resolved

// useState preserves the value and then triggers re-render
// useEffect runs after every render

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();

    setUsers(users);
    // INFINITE LOOP:
    // 1. update users
    // 2. rerender
    // 3. useEffect runs
    // 4. getUsers...
    // 5. step one again!!
    // AVOIDED USING THE SECOND ARGUMENT FOR THE USE EFFECT!

    // console.log(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h3>github users</h3>
      <ul className="users">
        {users.map((user) => {
          const { login, id, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
