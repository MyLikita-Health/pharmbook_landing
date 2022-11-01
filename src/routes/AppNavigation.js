
import {  useRoutes } from "react-router-dom";
import Eley from "../Form";
import Home from "../Home";
import { LiveStream } from "../livestream";
// import SingIn from "../Login";
import Profile from "../profile";
import SignIn from "../Signin";
import SignUp from "../signUp1";
// import SignUp from "../Signup1";

function AppNavigation() {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/login", element: <SignIn /> },
    { path: '/sign-up', element: <SignUp /> },
    { path: '/profile', element: <Profile /> },
    {
      path: "app",
      element: <Home />,
      children: [


      ],
    },
    {
      path: "auth",
      children: [
       
      ],
    },
    { path: "*", element: <Home /> },
  ]);

  return element;
}

export default AppNavigation;
