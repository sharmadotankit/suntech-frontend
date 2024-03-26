import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { useLocation } from 'react-router-dom';
import { selectUser } from '../store/selector';
import { useSelector } from 'react-redux';

const ProtectedRoutes: React.FC = () => {
  
  const location = useLocation();
  const user = useSelector(selectUser);
  const token = user?.token;
  const isLoggedIn = user.isLoggedIn;;

  let auth: boolean;

  if ((token == null || token === '') && (isLoggedIn == null || isLoggedIn === '' || isLoggedIn === 'false')) {
    auth = false;
  } else if (isLoggedIn && token !== null) {
    let decode;
    try {
      decode = jwtDecode(token);
    } catch (error) {
      console.error('Error decoding token:', error);
    }
    if (!decode) {
      auth = false;
    } else {
      auth = true;
    }
  } else if (isLoggedIn && (token == null || token === '')) {
    auth = false;
  } else {
    auth = false;
  }

  return auth ? (
    <span className="wrapper">
      <Outlet />
    </span>
  ) : (
    <Navigate to="/login" replace={true} state={{ pathAfterLogin: location }} />
  );
};

export default ProtectedRoutes;
