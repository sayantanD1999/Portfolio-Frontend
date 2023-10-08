import React from "react";
import { useSelector } from "react-redux";
import { getUserDetails } from "../../app/store/slices/auth";

const Home = () => {
  const user = useSelector(getUserDetails);

  return (
    <div>
      Home
      <br />
      <>Email : {user.email} </>
    </div>
  );
};

export default Home;
