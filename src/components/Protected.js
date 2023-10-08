import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import Cookies from 'universal-cookie';

function Protected({ children }) {
  const cookies = new Cookies();
  let cookie = cookies.get('authToken')
  let location = useLocation();
  console.log(cookie)

  if (!cookie) {
    return <Navigate to="/sign-in" state={{ from: location }} replace />
  }
  return children



}
export default Protected