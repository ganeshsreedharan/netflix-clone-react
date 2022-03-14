import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteObject, useRoutes } from 'react-router-dom';
import './App.css';
import Home from './screens/home/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import PrivateScreen from './screens/PrivateScreen';
import ProfileScreen from './screens/profile/ProfileScreen';
import { auth } from './shared/firebase';
import { IUser } from './shared/ICommonMovie';
import { login,logout,getCurrentUSer} from './shared/userSlice'

const App:React.FC = ()=> {


  const dispatch = useDispatch();


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        const user:IUser ={
          email:userAuth.email!,
          uid:userAuth.uid
        }
        dispatch(
          login(user)
        );
      } else {
        // Logged out
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  const routeObjectArray:RouteObject[] =[
    {
      path:"/profile",
      element:<PrivateScreen component={ProfileScreen}/>
    },
    {
      path:"/home",
      element:<PrivateScreen component={Home}/>
    },
    {
      path:"/",
      element:<LoginScreen/>,
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
