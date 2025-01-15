import axios from 'axios';
import React, { useState } from 'react';

const Registration = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    contact: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

//   let [state,setState]=useState([])

  
  const handleSignUp = () => {
    // Add your signup logic here
    // console.log('Form Data:', formData);
    // setState({...state=formData})

    // axios.post('http://116.75.62.44:8000/addusers',{formData})
    // axios.post('http://116.75.62.44:8000/adduser',{username:"atish",password:"789456123",email:"aa@gmail.com",contact:8865295163})
    // axios.post('http://116.75.62.44:8000/adduser',{username:"amol",password:"788556123",email:"amol@gmail.com",contact:9965295163})
    axios.post('http://116.75.62.44:8000/adduser',{username:formData.username,password:formData.password,email:formData.email,contact:formData.contact})
    
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
        backgroundColor: '#f9f9f9',
      }}
    >
      <h2>Sign Up</h2>
      <div style={{ marginBottom: '15px', textAlign: 'left' }}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
        //   value={formData.username}
          onChange={handleChange}
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
          name="password"
        //   value={formData.password}
          onChange={handleChange}
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
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
        //   value={formData.email}
          onChange={handleChange}
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
        <label htmlFor="contact">Contact:</label>
        <input
          type="tel"
          id="contact"
          name="contact"
        //   value={formData.contact}
          onChange={handleChange}
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
        onClick={handleSignUp}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Sign Up
      </button>

        {/* <div>{state.map((val)=>{
            return <h1>{val.username}</h1> 
        })}</div> */}
      {/* {formData} */}
    </div>
  );
};

export default Registration;
