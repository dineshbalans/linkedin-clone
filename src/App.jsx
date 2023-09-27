import { useDispatch, useSelector } from "react-redux";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Widget from "./components/Widget";
import Login from "./components/Login";
import { auth } from "./components/Firebase";
import { userActions } from "./store/userSlice";
import { useEffect } from "react";

export default function App() {
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      console.log(userAuth);
      userAuth
        ? dispatch(
            userActions.login({
              email: userAuth.email,
              displayName: userAuth.displayName,
              photoURL: userAuth.photoURL,
              uid: userAuth.uid,
            })
          )
        : dispatch(userActions.logout());
    });
  }, []);
  return (
    <>
      <Header />
      {!isUserLoggedIn ? (
        <Login />
      ) : (
        <div className="flex md:px-6 xl:px-16 md:py-5 justify-between flex-wrap">
          <Sidebar />
          <Feed />
          <Widget />
        </div>
      )}
    </>
  );
}
