import { Console } from "console";
import React, { useRef, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/pages/login.css";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const emailInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);
  const [success, setSuccess] = useState("");

  //submit handler function
  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess("");
    // input collected
    const enteredEmail = emailInput.current?.value;
    const enteredPassword = passwordInput.current?.value;
    if (
      enteredEmail?.trim().length === 0 &&
      enteredPassword?.trim().length === 0
    ) {
    }
    const user = {
      enteredEmail,
      enteredPassword,
    };
    setSuccess("sucessfully log in");

    //navigate to the next page
    setTimeout(() => {
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <div className="login container">
      <nav className="login-nav">
        <div className="logo-container ">
          <div>
            <img src="./img/Union.png" alt="" className="logo" />
          </div>
          <div>
            <img src="./img/lendsqr.png" alt="" className="company-name" />
          </div>
        </div>
      </nav>
      <section className="main-section row container pt-5">
        <div className="col-lg-6 col-md-6 col-sm-6 row">
          <img src="./img/pablo-sign-in 1 (1).svg" alt="" className="col-12" />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 form-section">
          <h1>Welcome! </h1>
          <p>Enter details to login.</p>

          <form action="" onSubmit={submitHandler}>
            <div className="">
              <input type="Email" placeholder="Email" ref={emailInput} />
            </div>
            <div className="">
              <input
                type="password"
                placeholder="Password"
                ref={passwordInput}
              />
            </div>
            <div className="show-password">
              <i> show</i>
            </div>

            <div className="forgot-password">Forgot PASSWORD?</div>

            <input type="submit" value="LOG IN" id="log-in" />
          </form>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
