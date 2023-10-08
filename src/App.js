import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useCookies } from 'react-cookie';
import MenuBar from "../src/components/MenuBar"
import Home from "../src/components/pages/Home"
import SignIn from "../src/components/pages/SignIn"
import SignUp from "../src/components/pages/SignUp"
import Protected from './components/Protected'
import './App.css';
import { CustomBrowserRouter } from "./CustomBrowsertHistory";


function App() {
  return (
    <CustomBrowserRouter>
      {/* <BrowserRouter> */}
      {/* <MenuBar isSignedIn={isSignedIn} signOutHandle={signout} /> */}
      <Routes>
        <Route path="/" element={
          <Protected>
            <Home />
          </Protected>
        }
        />
        <Route path="/sign-in" element={
          // <Protected>
            <SignIn />
          // </Protected>
        }
        />
        <Route path="/sign-up" element={<SignUp />} />

      </Routes>
      {/* {isSignedIn ? (
        <div className="d-grid mt-5">
          <button className="btn-danger" onClick={signout} >
            Sign out
          </button>
        </div>
      ) : (
        ""
      )} */}
      {/* </BrowserRouter> */}
    </CustomBrowserRouter>
  );
}

export default App;
