import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  asyncUserSignin,
} from "../../app/store/slices/auth";
import Cookies from 'universal-cookie';


const SignIn = () => {
  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState({});

  const setFormValue = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const submitValidate = (e) => {
    e.preventDefault();
    dispatch(asyncUserSignin(formValues));
  };

  useEffect(()=>{
    const cookies = new Cookies();
    let cookie = cookies.get('authToke')
    console.log(cookie)
  }
  ,[])

  return (
    <section className="py-5">
      <div className="container">
        <h1>Sign In</h1>
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
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
