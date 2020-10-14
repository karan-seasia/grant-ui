import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

import axios from "axios";

import { setUserData } from "./authSlice";

export const Auth = ({ match }) => {
  const dispatch = useDispatch();

  const getUserData = () => {
    match.params.status === "success"
      ? axios({
          method: "POST",
          url: `${process.env.REACT_APP_SERVICES_URL}/auth/userdata`,
          withCredentials: true,
        })
          .then((resp) => {
            dispatch(setUserData(resp.data));
          })
          .catch((error) => {
            console.log(error);
          })
      : console.log("Login Failure");
  };

  useEffect(() => {
    getUserData();
  });

  return (
    <div>
      {match.params.status === "success" ? (
        <Redirect to="/"></Redirect>
      ) : (
        <Redirect to="/"></Redirect>
      )}
    </div>
  );
};
