import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/form.css";
function LoginForm() {
  // logged in state

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

  const [name, setName] = useState("");
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
    console.log({
      name: name,
      email: email,
      password: password,
    });
    setIsLoggedin(false);
  };

  return (
    <main className="form-container">
      <form>
        <h1 className="form-title">Login.</h1>
        <div className="form-group">
          <input
            onChange={(e) => {
              handleNameInput(e.target.value);
            }}
            type="text"
            name="name"
            value={name}
            placeholder="..."
            required
          />
          <label for="name" className="label-name">
            <span className="content-name">Name</span>
          </label>
          <div className="verification-icon-cont"></div>
          <div className="error-msg-container">
            <h6>Invalid email address</h6>
          </div>
        </div>
        <div className="form-group">
          <input
            onChange={(e) => {
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
            <h6>Invalid name</h6>
          </div>
        </div>
        <div className="form-group">
          <input
            onChange={(e) => {
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
            <h6>invalid password</h6>
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
