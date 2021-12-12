import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../redux/actions/userActions";

function Description() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const userToAdd = {
    name: "steve",
    email: "steve@gmail.com",
    username: "stevo",
    phone: "0720532853",
  };
  const addNewUser = () => {
    dispatch(setUser(userToAdd));
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <button onClick={addNewUser}>ADD USER</button>
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
      <h1>{user.phone}</h1>
    </div>
  );
}

export default Description;
