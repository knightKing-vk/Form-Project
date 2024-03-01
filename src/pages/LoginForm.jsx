import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoggedIn(true);
  };
  const handleClick = () => {
    navigate("/signup");
  };
  return (
    <>
      {loggedIn ? (
        <h1>You have successfully logged in</h1>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <h1>🔏Login🔏</h1>
          <div className={styles.inputField}>
            <EmailIcon className={styles.inputIcon} />
            <input
              type="email"
              placeholder="Enter email..."
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.inputField}>
            <LockIcon className={styles.inputIcon} />
            <input
              type={!showPassword ? "password" : "text"}
              placeholder="Enter password..."
              required
              className={styles.passwordInput}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {!showPassword ? (
              <VisibilityIcon
                className={styles.inputIcon}
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <VisibilityOffIcon
                className={styles.inputIcon}
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>
          <button className={styles.loginBtn} type="submit">
            Login
          </button>
          <div>
            <button className={styles.linkBtn} onClick={handleClick}>
              Create a account
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default LoginForm;
