import React from "react";

import { selectUserData } from "./authSlice";
import { useSelector } from "react-redux";

export const UserData = () => {
  const user = useSelector(selectUserData);
  return <>{user ? `Hello ${user.username}!` : "Please Log In"}</>;
};
