import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '@/style/layout/AuthLayout.module.css';

export default function Login() {
  const navigate = useNavigate();
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [inputData, setInputData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setInputData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(inputData);
    // try {

    // } catch (error) {
    //   console.log(error);
    // }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    navigate('/signup');
  };

  return (
    <div className={styles.contents}>
      <form>
        <div className={styles.formItem}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={inputData.email}
            onChange={handleInputChange}
            onBlur={() => setEmailTouched(true)}
          />
          <p
            className={
              emailTouched && inputData.email === "" ? styles.active : ""
            }
          >
            이메일을 입력해주세요.
          </p>
        </div>
        <div className={styles.formItem}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={inputData.password}
            onChange={handleInputChange}
            onBlur={() => setPasswordTouched(true)}
          />
          <p
            className={
              passwordTouched && inputData.password === "" ? styles.active : ""
            }
          >
            비밀번호를 입력해주세요.
          </p>
        </div>
      </form>

      <div className={styles.buttons}>
        <button type="submit" onClick={handleLogin} aria-label="submit">
          LOGIN
        </button>
        <button onClick={handleSignup} aria-label="signup">
          SIGNUP
        </button>
      </div>
    </div>
  );
}
