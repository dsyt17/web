import React, { useEffect, useState } from "react";
import "./App.css";
import { GET_ALL_USERS, GET_USER } from "./query/user";
import { useQuery, useMutation } from "@apollo/client";
import { CREATE_USER } from "./mutations/user";

type UserType = {
  id: number;
  username: string;
  age: number;
};

function App() {
  const { data, loading, error, refetch } = useQuery(GET_ALL_USERS);
  const { data: oneUserData, loading: oneUserLoading } = useQuery(GET_USER, {
    variables: {
      id: 1,
    },
  });

  const [newUser] = useMutation(CREATE_USER);
  const [users, setUsers] = useState<Array<UserType>>([]);
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(0);

  useEffect(() => {
    if (!loading) {
      setUsers(data.getAllUsers);
      console.log(oneUserData);
    }
  }, [data]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  const usernameHandler = (e: any) => {
    setUsername(e.target.value);
  };

  const ageHandler = (e: any) => {
    const newAge = Number(e.target.value);
    setAge(newAge);
  };

  const addUser = (e: any) => {
    e.preventDefault();
    newUser({
      variables: {
        input: {
          username,
          age,
        },
      },
    }).then(({ data }) => {
      console.log(data);
      setAge(0);
      setUsername("");
    });
  };

  const getAllUsers = (e: any) => {
    e.preventDefault();
    refetch();
  };

  return (
    <div className="App">
      <form>
        <input
          value={username}
          onChange={usernameHandler}
          placeholder="Name"
          type="text"
        />
        <input
          value={age}
          onChange={ageHandler}
          placeholder="Age"
          type="number"
        />
        <div>
          <button onClick={addUser}>Create user</button>
          <button onClick={getAllUsers}>Get users</button>
        </div>
      </form>
      <div>
        {users.map((u) => (
          <div key={u.id}>
            {u.id}, {u.username}, {u.age},
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
