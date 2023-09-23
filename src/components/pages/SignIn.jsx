import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncUserLogin, asyncUserSignup } from "../../app/store/slices/auth";

const SignIn = ({ signInHandle }) => {
  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState({});
  const [cookies, setCookie] = useCookies(["name"]);
  const navigate = useNavigate();

  const setFormValue = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const submitValidate = (e) => {
    e.preventDefault();
    // setCookie('Login', true);
    // signInHandle(cookies.Login);
    // navigate("/");
    console.log({ ...formValues });
    dispatch(asyncUserSignup(formValues));
  };

  useEffect(() => {
    if (cookies.Login === true) {
      signInHandle(cookies.Login);
      navigate("/");
    }
  }, []);

  return (
    <section className="py-5">
      <div className="container">
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
