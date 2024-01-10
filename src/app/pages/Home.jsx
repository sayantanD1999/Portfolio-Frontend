import React from "react";
import { useSelector } from "react-redux";
import { getUserDetails } from "../../app/store/slices/auth";
import { useForm } from "react-hook-form";
import Dashboard from "../components/Dashboard";

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const user = useSelector(getUserDetails);

  return <Dashboard />;
};

export default Home;
