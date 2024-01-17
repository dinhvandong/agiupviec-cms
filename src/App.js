import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/common/PrivateRoute';

const App = () => {
  // const routes = routesData.routes;
  const isAuthenticated = false;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route
          path="/dashboard"
          element={<PrivateRoute component={Dashboard} isAuthenticated={isAuthenticated} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;