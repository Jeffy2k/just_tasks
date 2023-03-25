import { useState } from "react";
import "../styles/form.css";

function SignupForm() {

  const [isLoggedin, setIsLoggedin] = useState(false);


  // password visibility

  const [isPasswordVisible, setVisible] = useState(false);

  let visibility_icon = isPasswordVisible ? "" : " ";
  let input_type = isPasswordVisible ? "text" : "password";

  function togglePasswordVisibilty() {
    if (!isPasswordVisible) {
      setVisible(true);
    } else setVisible(false);
  }


  //   confirmation password visibility


  const [isPasswordConfirmationVisible, setConfirmatioVisible] = useState(false);

  let confirmation_visibility_icon = isPasswordConfirmationVisible ? "" : " ";
  let confirmation_input_type = isPasswordConfirmationVisible ? "text" : "password";

  function toggleConfirmationPasswordVisibilty() {
    if (!isPasswordConfirmationVisible) {
      setConfirmatioVisible(true);
    } else setConfirmatioVisible(false);
  }

  // input states

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");


  let handleNameInput = (name) => {
    setName(name);
  };

  let handleEmailInput = (email) => {
    setEmail(email);
  };

  let handlePasswordInput = (password) => {
    setPassword(password);
  };

  let handlePasswordConfirmationInput = (password) => {
    setPasswordConfirmation(password);
  };


  let handleSignUp = () => {
    console.log({
      name: name,
      email: email,
      password: password,
      confirmation: passwordConfirmation
    });

    if(password !== passwordConfirmation) {
        document.getElementById('password-error').style.visibility = 'visible';
    }
    // setIsLoggedin(true);
  };

  return (
    <main className="form-container">
      <form>
        {" "}
        <h1 className="form-title">Sign Up</h1>
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
          ></div>
          <div className="error-msg-container">
            <h6>invalid password</h6>
          </div>
        </div>
      <div className="form-group">
          <input
            onChange={(e) => {
              handlePasswordConfirmationInput(e.target.value);
            }}
            type={confirmation_input_type}
            name="name"
            value={passwordConfirmation}
            placeholder="..."
            required
          />
          <label for="name" className="label-name">
            <span className="content-name">Confirm password</span>
          </label>
          <div
            onClick={() => {
                toggleConfirmationPasswordVisibilty();
            }}
            className="visibility-icon-cont"
          ></div>
          <div id="password-error">
            <h6>Password does not match</h6>
          </div>
        </div>
        <div className="checkbox-container">
            <input type="checkbox" required/>
            <h5>I Agree with privacy and policy</h5>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleSignUp();
          }}
          className="form-button"
        >
          SIGN UP
          {isLoggedin && (
            <div className="loader-container">
              <div className="ball"></div>
              <div className="ball"></div>
              <div className="ball"></div>
            </div>
          )}
        </button>
        <h4 className="redirect-msg">Already have an account? <span>Sign in</span></h4>
      </form>
    </main>
  );
}

export default SignupForm;
