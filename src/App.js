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

function App() {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getUser(auth.jwt || jwt));
  }, [auth.jwt]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <CustomerRoute />
    </ThemeProvider>
  );
}

export default App;
