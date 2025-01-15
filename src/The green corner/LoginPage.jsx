let LoginPage=()=>{

    let handleSubmit=()=>{
        console.log();
        
    }
    return(
        <div className="login-container flex justify-center items-center h-[100vh] bg-[#f0f0f0]" >
      <div style={{
        backgroundColor: '#fff',
        padding: '40px',
        borderRadius: '5px',
        boxshadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        textalign: 'center'
      }}>
        <h2>WELCOME BACK..!</h2>
        <p>Login into your The Green Corner Account</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
            //   value={email}
            //   onChange={handleEmailChange}
              required
              style={{
                width: '20%',
                padding: '10px',
                border: '1px solid #ccc',
                borderradius: '3px'
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
            //   value={password}
            //   onChange={handlePasswordChange}
              required
              style={{
                width: '20%',
                padding: '10px',
                border: '1px solid #ccc',
                borderradius: '3px'
              }}
            />
          </div>

         
        
        <div style={{
             backgroundcolor:' #fff',
             color: '#333',
             margin: '0 5px'
        }}>
          <p>Or continue with</p>
          <button style={
            {
                backgroundcolor: '#4caf50',        
                color:'black',
                padding: '10px 20px',
                border: 'none',
                borderradius: '3px',
                cursor: 'pointer'
   
            }
          }>
            <img src="google-logo.svg" alt="Google" />
            Google
          </button>
          <button style={{
                 backgroundcolor: '#4caf50',        
                 color:'black',
                 padding: '10px 20px',
                 border: 'none',
                 borderradius: '3px',
                 cursor: 'pointer'
    
          }}>
            <img src="facebook-logo.svg" alt="Facebook" />
            Facebook
          </button>
          <button style={{
                 backgroundcolor: '#4caf50',        
                 color:'black',
                 padding: '10px 20px',
                 border: 'none',
                 borderradius: '3px',
                 cursor: 'pointer'
    
          }}>
            <img src="apple-logo.svg" alt="Apple" />
            iPhone
          </button>
          <br />
          <button type="submit" style={{
             backgroundcolor: 'red',        
                width:'300px',
             color:'black',
             padding: '10px 20px',
             border: '1px solid black',
             //borderradius: '10%',
             borderRadius:'3%',
             cursor: 'pointer'
          }}>Login</button>
        </div>
        </form>


        <p>Don't have an account? <a href="/signup">Sign up!</a></p>
      </div>
    </div>
    )
}
export default LoginPage