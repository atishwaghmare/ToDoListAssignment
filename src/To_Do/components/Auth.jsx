import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../actions/authActions';

const Auth = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <div style={{
      backgroundColor:'#e6ffe6'
    }} >
      <h1 style={{
        textAlign:'center',
     
      }}>To_Do</h1>
      {isAuthenticated ? (
        
        <button style={{
          backgroundColor:'#e6ffe6',
          color:'red'
        }} onClick={() => dispatch(logout())}>
          Logout
        </button>
      ) : (
        <div style={{
          height:'100vh',
          width:'100vw',
          display:'flex',
          justifyContent:'center',
          alignItems:'center'

        }}><button className="btn btn-success" onClick={() => dispatch(login())}>
          Login
        </button></div>
      )}
    </div>
  );
};

export default Auth;
