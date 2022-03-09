import React from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import './App.css';
import Home from './screens/home/HomeScreen';

const App:React.FC = ()=> {
  const routeObjectArray:RouteObject[] =[
    {
      path:"/",
      element:<Home/>,
    }
  ]
  let element = useRoutes(routeObjectArray)
  return (
    <div className="app">
        {element}
    </div>
  );
}

export default App;
