import React, { useEffect, useState } from "react";
import styles from "./SignUpForm.module.css";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState("");
  const [showValidationMessage, setShowValidationMessage] = useState(true);
  const [showErrorPasswordMessage, setShowErrorPasswordMessage] =
    useState(true);
  const [signUp, setSignUp] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSignUp(true);
  };

  useEffect(() => {
    if (password !== "") {
      if (
        /^(?=.*\d)(?=(.*\W))(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{1,8}$/.test(
          password
        )
      ) {
        setShowValidationMessage(true);
      } else {
        setShowValidationMessage(false);
      }

      if (password === confirmPassword) {
        setShowErrorPasswordMessage(true);
      } else {
        setShowErrorPasswordMessage(false);
      }
    }
  }, [password, confirmPassword]);

  const handleClick = () => {
    navigate("/");
  };
  return (
    <>
      {signUp ? (
        <h1>You have successfully signedUp </h1>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <h1>SignUp</h1>
          <div className={styles.inputField}>
            <input type="text" placeholder="Enter FullName..." required />
          </div>
          <div className={styles.inputField}>
            <EmailIcon className={styles.icon} />
            <input
              type="email"
              placeholder="Enter email..."
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.passwordContainer}>
            <div className={styles.inputField}>
              <LockIcon className={styles.icon} />
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
                  className={styles.icon}
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <VisibilityOffIcon
                  className={styles.icon}
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>
            {!showValidationMessage && (
              <p className={styles.msg}>
                should contain at least 1 digit, 1 special characters, 1
                upperCase, 1lowerCase,and any blank space
              </p>
            )}
          </div>
          <div className={styles.passwordContainer}>
            <div className={styles.inputField}>
              <LockIcon className={styles.icon} />
              <input
                type={!showConfirmPassword ? "password" : "text"}
                placeholder="Confirm password..."
                required
                className={styles.passwordInput}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              {!showConfirmPassword ? (
                <VisibilityIcon
                  className={styles.icon}
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                />
              ) : (
                <VisibilityOffIcon
                  className={styles.icon}
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                />
              )}
            </div>
            {!showErrorPasswordMessage && (
              <p className={styles.msg}>Password not match...</p>
            )}
          </div>
          <button type="submit" className={styles.btn}>
            SignUp
          </button>
          <div>
            <button className={styles.linkBtn} onClick={handleClick}>
              Allready have a account
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default SignUpForm;
