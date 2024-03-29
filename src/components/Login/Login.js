import React, { useState } from "react";
import "./Login.css";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "../../redux/userSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [Profilepic, setProfilepic] = useState("");

  const auth = getAuth();
  const dispatch = useDispatch();

  const register = () => {
    if (!name) {
      return alert("Please enter your Full name!");
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        updateProfile(userAuth.user, {
          displayName: name,
          photoURL: Profilepic,
        }).then(() => {
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: name,
              photoUrl: Profilepic,
            })
          );
        });
      })
      .catch((error) => alert(error));
  };
  const loginApp = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };
  return (
    <div className="login">
      <img
        src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks"
        alt=""
        value={Profilepic}
        onChange={(e) => setProfilepic(e.target.value)}
      />
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name (required if registering)"
        />
        <input type="text" placeholder="Profile pic URL (optional)" />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit" onClick={loginApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member ?{" "}
        <span className="login__register" onClick={register}>
          {" "}
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
