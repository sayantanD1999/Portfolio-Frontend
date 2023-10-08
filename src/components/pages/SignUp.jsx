import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  asyncUserSignup,
  getAuthLoader,
  getServerError,
} from "../../app/store/slices/auth";

const SignIn = () => {
  const dispatch = useDispatch();

  const loader = useSelector(getAuthLoader);
  const error = useSelector(getServerError);
  const [formValues, setFormValues] = useState({});
  const setFormValue = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const submitValidate = (e) => {
    e.preventDefault();

    console.log({ ...formValues });
    dispatch(asyncUserSignup(formValues));
  };

  return (
    <section className="py-5">
      <div className="container">
        <h1>Sign Up</h1>
        <div className="card" style={{ width: "30rem", margin: "auto" }}>
          <div className="card-body">
            <form onSubmit={submitValidate}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  onChange={setFormValue}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  onChange={setFormValue}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              {loader.signupLoader && <p>Loading...</p>}
              {error && <p className="text-red"> {error}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
