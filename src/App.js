import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import generateRoutes from './generateRoutes';
import routesData from './routes.json';

const App = () => {
  const routes = routesData.routes;

  return (
    <BrowserRouter>
      {generateRoutes(routes)}
    </BrowserRouter>
  );
};

export default App;