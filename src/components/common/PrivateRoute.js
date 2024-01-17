import React from 'react';
import { Route } from 'react-router-dom';
import { isAuthenticated } from '../../utils/localStorage';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {

    const navigate = useNavigate();

  // Function to handle redirection
  const handleRedirect = () => {
    navigate('/login');
  };
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
            <>
            {handleRedirect()}
            {/* Render a loading spinner or some other indicator */}
            <div>Loading...</div>
          </>
        )
      }
    />
  );
};

export default PrivateRoute;