import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  let [state,setState]=useState([])
  axios.get('http://116.75.62.44:8000/auth').then((val)=>{setState(state=val.data)
  })

  const handleLogin = (e) => {
   
    e.preventDefault()
    let data=state.find((val)=>{


        if(val.username=== username && val.password==password)
        {
           
            return true
        }
        else{
           
            return false
        }
    })
   
    if(data)
    {
     alert("valid user")
      
    }
    else{
      alert("invalid user")
    }
  };

  return (
    <div
      style={{
        maxWidth: '400px',
        margin: '0 auto',
        padding: '20px',
        textAlign: 'center',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      }}
    >
      <form action=''>
      <h2>Login Page</h2>
      <div style={{ marginBottom: '15px', textAlign: 'left' }}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            marginTop: '5px',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
        />
      </div>
      <div style={{ marginBottom: '15px', textAlign: 'left' }}>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            marginTop: '5px',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
        />
      </div>
      <button
        onClick={handleLogin}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Login
      </button>
      
      </form>
      <p><Link to='/registration'>Sign up!</Link></p>
    </div>
  );
};

export default Login;
