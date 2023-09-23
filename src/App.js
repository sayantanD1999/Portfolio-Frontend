import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useCookies } from 'react-cookie';
import MenuBar from "../src/components/MenuBar"
import Home from "../src/components/pages/Home"
import SignIn from "../src/components/pages/SignIn"
import SignUp from "../src/components/pages/SignUp"
import Protected from './components/Protected'
import './App.css';


function App() {
  const [isSignedIn, setIsSignedIn] = useState(null)
  const [cookies, removeCookie] = useCookies(['name']);

  const signin = (signin) => {
    console.log(signin)
    if (signin) {
      setIsSignedIn(true)
    }
  }

  const signout = (signout) => {
    if (signout === false) {
      setIsSignedIn(false)
      removeCookie('Login')
    }
  }
  console.log(isSignedIn)
  return (
    <BrowserRouter>
      <MenuBar isSignedIn={isSignedIn} signOutHandle={signout} />
      <Routes>
        <Route path="/" element={
          <Protected isSignedIn={isSignedIn}>
            <Home />
          </Protected>
        }
        />
        <Route path="/sign-in" element={
          <Protected isSignedIn={!isSignedIn}>
            <SignIn signInHandle={signin} />
          </Protected>
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
    </BrowserRouter>
  );
}

export default App;
