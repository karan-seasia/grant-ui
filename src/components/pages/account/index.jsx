import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useSelector } from "react-redux";

const USER_DATA = gql`
  query {
    user {
      email
    }
  }
`;

const Account = () => {
  const user = useSelector((state) => state.userdata.user);

  const { loading, error, data } = useQuery(USER_DATA);
  if (loading) return <p>Loading...</p>;

  if (error) {
    console.log(error.message);
    let errorMessage;
    if (!user) {
      errorMessage = "";
    } else {
      errorMessage = <p>Error :(</p>;
    }

    return errorMessage;
  }

  return <>{data.user.email}</>;
};

export default Account;
