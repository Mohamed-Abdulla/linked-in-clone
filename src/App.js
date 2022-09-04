import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout, selectUser } from "./redux/userSlice";
import { getAuth } from "firebase/auth";
import "./App.css";
import Login from "./components/Login/Login";
import Feed from "./components/Feed/Feed";
import Header from "./components/Header/Header";
import Sidebar from "./components//Sidebar/Sidebar";
import Widgets from "./components/Widgets/Widgets";

function App() {
  // const user = useSelector(selectUser);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const auth = getAuth();
  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        //user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        //user is logged out
        dispatch(logout());
      }
    });
  }, []);
  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
