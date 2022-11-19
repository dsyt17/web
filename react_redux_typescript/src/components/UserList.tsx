import React, { useEffect } from "react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { fetchUsers } from "../store/action-creators/user";

const UserList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { users, error, loading } = useTypedSelector((state) => state.user);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default UserList;
