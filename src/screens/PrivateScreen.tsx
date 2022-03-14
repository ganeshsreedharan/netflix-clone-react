import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getCurrentUSer } from '../shared/userSlice';

interface Props {
    component: React.ComponentType
  }

const PrivateScreen:React.FC<Props> = ({ component :RouteComponent }) => {

  const user = useSelector(getCurrentUSer);
  if (!user) {
    return <Navigate to="/login"  />;
  }
  return <RouteComponent/>;
}

export default PrivateScreen