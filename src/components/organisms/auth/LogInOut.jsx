import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import axios from "axios";

import { setUserData, selectUserData } from "./authSlice";
import { Link, Redirect } from "react-router-dom";

const AuthRoute = () => {
  const user = useSelector(selectUserData);
  const dispatch = useDispatch();

  const logOut = () => {
    console.log("Here");
    return <Redirect to="signin" />;

    // axios({
    //   method: "POST",
    //   url: `${process.env.REACT_APP_SERVICES_URL}/auth/logout`,
    //   data: { state: {} },
    //   withCredentials: true,
    // })
    //   .then((resp) => {
    //     console.log(resp.data);
    //     dispatch(setUserData(false));
    //     return (window.location = resp.data.redirectUrl);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  // const logIn = () => {
  //   axios({
  //     method: "POST",
  //     url: `${process.env.REACT_APP_SERVICES_URL}/auth/login`,
  //     data: { state: {} },
  //     withCredentials: true,
  //   })
  //     .then((resp) => {
  //       return (window.location = resp.data.authUrl);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <Link to="/signin">
      <Button onClick={logOut}>Log Out</Button>
    </Link>
  );
};

export default AuthRoute;
