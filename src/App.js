import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import { Route, Routes } from "react-router-dom";
import MenuBar from "../src/app/components/MenuBar"
import Home from "../src/app/pages/Home"
import SignUp from "../src/app/pages/SignUp"
import ErrorPage from "../src/app/pages/ErrorPage"
import { checkAuthLoader, tokenLoader } from '../src/app/utils/Auth';
import AuthenticationPage, { action as authAction, } from '../src/app/pages/Authentication';
import { action as logoutAction } from '../src/app/pages/Logout';
// import { CustomBrowserRouter } from "./CustomBrowsertHistory";
// import Protected from './components/Protected';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MenuBar />,
    errorElement: <ErrorPage />,
    id: 'root',
    children: [
      { index: true, element: <Home />, loader: checkAuthLoader },
      {
        path: 'sign-in',
        element: <AuthenticationPage />,
      },
      {
        path: 'sign-up',
        element: <SignUp />,
        action: authAction,
      },
      {
        path: 'logout',
        action: logoutAction,
      },
    ],
  },
]);

function App() {


  return (
    // <CustomBrowserRouter>
    //   <MenuBar />
    //   <Routes>
    //     <Route path="/" element={<Protected><Home /></Protected>} />
    //     <Route path="/sign-in" element={<SignIn />} />
    //     <Route path="/sign-up" element={<SignUp />} />
    //   </Routes>
    // </CustomBrowserRouter>
    <RouterProvider router={router} />
  );
}

export default App;
