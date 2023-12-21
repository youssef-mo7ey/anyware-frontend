import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

const requireAuth = <P extends object> (WrappedComponent:React.ComponentType<P>) => {
  const AuthenticatedComponent = (props:any) => {
    const navigate= useNavigate()

    useEffect(() => {
      const isLogged=window.localStorage.getItem("logged")
      if(isLogged =="true"){
        navigate('/dashboard')
      } 
      else{
        navigate('/');
      }
    }, []);

    return <WrappedComponent {...props} />;
  };
  return AuthenticatedComponent;
}

export default requireAuth