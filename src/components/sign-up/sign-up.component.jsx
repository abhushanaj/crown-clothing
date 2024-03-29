import React, { useState } from 'react';

/* Styling */
import './sign-up.styles.scss';

/* Child Components */
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

/* Auth utils */
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

const SignUp = () => {
  const [userDetails, setUserDetails] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  /* handle form submit */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, displayName, password, confirmPassword } = userDetails;
    if (password !== confirmPassword) {
      alert('Password dont match');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      setUserDetails({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (err) {
      console.error('Error creating users from email and password', err);
    }
  };

	/* handle change */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>

      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={userDetails.displayName}
          label="Display Name"
          required
          handleChange={handleChange}
        />
        <FormInput
          type="email"
          name="email"
          value={userDetails.email}
          label="Email"
          required
          handleChange={handleChange}
        />
        <FormInput
          type="password"
          name="password"
          value={userDetails.password}
          label="Password"
          required
          handleChange={handleChange}
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={userDetails.confirmPassword}
          label="Confirm Password"
          required
          handleChange={handleChange}
        />

        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
