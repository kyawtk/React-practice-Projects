import { useState } from "react";
import "../styles/signUpForm.scss";

function SignUpForm() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleName(e) {
    setUser((currentUser) => ({
      ...currentUser,
      name: e.target.value,
    }));
  }

  function handleEmail(e) {
    setUser((currentUser) => ({
      ...currentUser,
      email: e.target.value,
    }));
  }

  function handlePassword(e) {
    setUser((currentUser) => ({
      ...currentUser,
      password: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="signupForm-container">
      {submitted ? (
        <h1>Congratulations, {user.name}, you have signed up!!</h1>
      ) : (
        <form action="#" id="signUpForm" onSubmit={handleSubmit}>
          <input
            type="text"
            required
            placeholder="Your name"
            id="name"
            value={user.name}
            onChange={handleName}
          />
          <input
            placeholder="Your Email"
            type="email"
            required
            value={user.email}
            onChange={handleEmail}
          />
          <input
            placeholder="Enter a weak password"
            type="password"
            required
            value={user.password}
            onChange={handlePassword}
          />
          <input type="submit" value="Sign up Now" />
        </form>
      )}
    </div>
  );
}

export default SignUpForm;
