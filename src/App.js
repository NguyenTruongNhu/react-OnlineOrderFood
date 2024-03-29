import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import CustomerRoute from "./Routers/CustomerRoute";
import Cart from "./component/Cart/Cart";
import Home from "./component/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import Profile from "./component/Profile/Profile";
import RestaurantDetails from "./component/Restaurant/RestaurantDetails";
import { darkTheme } from "./component/Theme/DarkTheme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useEffect } from "react";
import { getUser } from "./component/state/Authentication/Action";
import { findCart } from "./component/state/Cart/Action";
import Routers from "./Routers/Routers";
import { getRestaurantByUserId } from "./component/state/Restaurant/Action";

function App() {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getUser(auth.jwt || jwt));
    dispatch(findCart(jwt));
  }, [auth.jwt]);

  useEffect(() => {
    dispatch(getRestaurantByUserId(auth.jwt || jwt));
  }, [auth.user]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routers />
    </ThemeProvider>
  );
}

export default App;
