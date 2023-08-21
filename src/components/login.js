import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login?.email === "raj@ncr.com" && login?.password === "ncr@123") {
      navigate("/dashboard");
    } else {
      toast.error("invalid credentials");
    }
  };

  const handleSignOnchange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="form-container">
      <h2>NCR</h2>
      <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
        <label>Email</label>
        <input
          onChange={(e) => handleSignOnchange(e)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label>Password</label>
        <input
          onChange={(e) => handleSignOnchange(e)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <button>Sign in</button>
      </form>
    </div>
  );
}

export default Login;
