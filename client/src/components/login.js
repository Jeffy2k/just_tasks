import { useState } from "react";
import { NavLink, Redirect } from "react-router-dom";
import "../styles/form.css";
function LoginForm() {
  // logged in state

  const[authenticated, setAuthenticated] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(false);

  // password visibility

  const [isVisible, setVisible] = useState(false);

  let visibility_icon = isVisible ? "visibility_off" : "visibility";
  let input_type = isVisible ? "text" : "password";

  function togglePasswordVisibilty() {
    if (!isVisible) {
      setVisible(true);
    } else setVisible(false);
  }

  // input states

  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let handleNameInput = (name) => {
    setName(name);
  };

  let handleEmailInput = (email) => {
    setEmail(email);
  };

  let handlePasswordInput = (password) => {
    setPassword(password);
  };

  // handle form submission

  let handleLogin = () => {

    let userObj ={
      username,
      email,
      password,
    }

    fetch("http://localhost:3000/users/login",{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(userObj)
    }).then((response) => {
      if (response.ok) {
        setIsLoggedin(false)
        setAuthenticated(true)
      } 
      else if (!response.ok)
      {
        setIsLoggedin(false)
        return response.json().then((error) => {

          console.error(error["error"]);

          let errorMessage = error.error;

          document.getElementById("login-error-container").innerHTML = errorMessage
    
    });
  }})}



    // if registered redirect to login page

    if(authenticated){
      return <Redirect to="/dashboard" />
    }
  
  
    // REMOVE ERROR MESSAGE
  
    let removeErrorMessage = (id) => {
      document.getElementById("login-error-container").innerHTML = '';
    }
  

   return (
     <main className="form-container">
       <form>
         <h1 className="form-title">Login.</h1>
          <div className="form-group">
          <input
            onChange={(e) => {
              removeErrorMessage("login-error-container")
              handleNameInput(e.target.value);
            }}
            type="text"
            name="name"
            value={username}
            placeholder="..."
            required
          />
          <label for="name" className="label-name">
            <span className="content-name">Name</span>
          </label>
          <div className="verification-icon-cont"></div>
          <div className="error-msg-container">
            <h6 id="name-error-container"></h6>
          </div>
        </div>
        <div className="form-group">
          <input
            onChange={(e) => {
              removeErrorMessage("elogin-error-container")
              handleEmailInput(e.target.value);
            }}
            type="email"
            name="name"
            value={email}
            placeholder="..."
            required
          />
          <label for="name" className="label-name">
            <span className="content-name">Email</span>
          </label>
          <div className="verification-icon-cont"></div>
          <div className="error-msg-container">
            <h6 id="email-error-container"></h6>
          </div>
        </div>
        <div className="form-group">
          <input
            onChange={(e) => {
              removeErrorMessage("passlogin-error-container")
              handlePasswordInput(e.target.value);
            }}
            type={input_type}
            name="name"
            value={password}
            placeholder="..."
            required
          />
          <label for="name" className="label-name">
            <span className="content-name">Password</span>
          </label>
          <div
            onClick={() => {
              togglePasswordVisibilty();
            }}
            className="visibility-icon-cont"
          >
            <i className="material-icons">{visibility_icon}</i>
          </div>
          <div className="error-msg-container">
            <h6 id="login-error-container"></h6>
          </div>
        </div>
        <h5 className="forgot-msg">Forgot your password?</h5>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleLogin();
          }}
          className="form-button"
        >
          LOGIN
          {isLoggedin && (
            <div className="loader-container">
              <div className="ball"></div>
              <div className="ball"></div>
              <div className="ball"></div>
            </div>
          )}
        </button>
        <h4 className="redirect-msg">
          Not a member?
          <NavLink className='span' to="/signup">
            <span>Sign up</span>
          </NavLink>
        </h4>
      </form>
    </main>
  );
}

export default LoginForm;
