import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import { Route, Routes } from "react-router-dom";
import MenuBar from "../src/components/MenuBar"
import Home from "../src/pages/Home"
import SignUp from "../src/pages/SignUp"
import ErrorPage from "../src/pages/ErrorPage"
import { checkAuthLoader, tokenLoader } from './util/Auth';
import AuthenticationPage, { action as authAction, } from './pages/Authentication';
import { action as logoutAction } from './pages/Logout';
// import { CustomBrowserRouter } from "./CustomBrowsertHistory";
// import Protected from './components/Protected';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MenuBar />,
    errorElement: <ErrorPage />,
    id: 'root',
    loader: tokenLoader,
    children: [
      { index: true, element: <Home />, loader: checkAuthLoader },

      // {
      //   path: 'events',
      //   element: <EventsRootLayout />,
      //   children: [
      //     {
      //       index: true,
      //       element: <EventsPage />,
      //       loader: eventsLoader,
      //     },
      //     {
      //       path: ':eventId',
      //       id: 'event-detail',
      //       loader: eventDetailLoader,
      //       children: [
      //         {
      //           index: true,
      //           element: <EventDetailPage />,
      //           action: deleteEventAction,
      //         },
      //         {
      //           path: 'edit',
      //           element: <EditEventPage />,
      //           action: manipulateEventAction,
      //           loader: checkAuthLoader,
      //         },
      //       ],
      //     },
      //     {
      //       path: 'new',
      //       element: <NewEventPage />,
      //       action: manipulateEventAction,
      //       loader: checkAuthLoader,
      //     },
      //   ],
      // },

      {
        path: 'sign-in',
        element: <AuthenticationPage />,
        action: authAction,
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
