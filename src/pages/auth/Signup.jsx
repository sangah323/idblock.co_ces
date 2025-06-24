import React, { useState } from 'react';
import styles from '@/style/layout/AuthLayout.module.css';
import style from '@/style/pages/Signup.module.css';

export default function Signup() {
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [passwordConfirmData, setPasswordConfirmData] = useState('');
  const [inputData, setInputData] = useState({
    email: '',
    password: ''
  }); 

  const handleConfirmChange = (e) => {
    setPasswordConfirmData(e.target.value);
  }
  
  const handleInputChange = (e) => {
    setInputData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSignup = (e) => {
    e.preventDefault();
  }

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
        <div className={styles.formItem}>
          <label htmlFor="passwordConfirm">Password Confirm</label>
          <input
            type="password"
            name="passwordConfirm"
            value={passwordConfirmData}
            onChange={handleConfirmChange}
            onBlur={() => setPasswordTouched(true)}
          />
          <p
            className={
              passwordTouched && inputData.password !== passwordConfirmData
                ? styles.active
                : ""
            }
          >
            비밀번호가 일치하지 않습니다.
          </p>
        </div>
      </form>

      <button
        className={style.signupButton}
        onClick={handleSignup}
        aria-label="signup"
      >
        SIGNUP
      </button>
    </div>
  );
}
