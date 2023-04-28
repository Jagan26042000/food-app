import React, { useReducer, useState } from "react";
import "./LoginForm.css";
import { useNavigate } from "react-router-dom";
import { useShopsCrud } from "../context/ShopsContextCrud";

const emailReducer = (state, action) => {
  if (action.type === "INPUT_EMAIL") {
    return { value: action.val, isvalid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isvalid: state.value.includes("@") };
  }
  if (action.type === "EMAIL_RESET") {
    return { value: "" };
  }
  return { value: "", isvalid: false };
};
const passwordReducer = (state, action) => {
  if (action.type === "INPUT_PASSWORD") {
    return { value: action.val, isvalid: action.val.trim().length > 2 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isvalid: state.value.trim().length > 2 };
  }
  if (action.type === "PASSWORD_RESET") {
    return { value: "" };
  }
  return { value: "", isvalid: false };
};

const LoginForm = (props) => {
  const navigate = useNavigate();
  const [formValid, setFormValid] = useState(false);
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isvalid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isvalid: null,
  });

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "INPUT_EMAIL", val: event.target.value });
    setFormValid(event.target.value.includes("@") && passwordState.value);
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "INPUT_PASSWORD", val: event.target.value });
    setFormValid(event.target.value.trim().length > 2 && emailState.isvalid);
  };
  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };
  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatchEmail({ type: "EMAIL_RESET" });
    dispatchPassword({ type: "PASSWORD_RESET" });
    loginHandler(emailState.value, passwordState.value);
  };
  const { credentials } = useShopsCrud();

  const loginHandler = (email, password) => {
    if (email === credentials.email && password === credentials.password) {
      navigate("/ShopList");
    } else {
      alert("Please enter Valid credentials");
    }
  };
  return (
    <div>
      <section className="section">
        <div className="form-box">
          <div className="form-value">
            <form onSubmit={submitHandler}>
              <h2>Login</h2>
              <div className="input-box">
                <input
                  type="text"
                  id="email"
                  onChange={emailChangeHandler}
                  onBlur={validateEmailHandler}
                  value={emailState.value}
                ></input>
                <label>Email</label>
              </div>
              <div className="input-box">
                <input
                  type="password"
                  id="password"
                  onChange={passwordChangeHandler}
                  onBlur={validatePasswordHandler}
                  value={passwordState.value}
                ></input>
                <label>Password</label>
              </div>
              <div>
                <button className="button" type="submit" disabled={!formValid}>
                  Login
                </button>
              </div>
              <div className="register">
                <p>
                  {/* Don't have account <a href="#">Sign Up</a> */}
                  Don't have account <h3>Sign Up</h3>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
export default LoginForm;
