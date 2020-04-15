import { ThemeProvider } from "@material-ui/core";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import SideDrawer from "./Drawer";
import Header from "./Header";
import Menu from "./Menu";
import Search from "./Search";
import Stock from "./Stock";
import theme from "./theme";

function View() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Stock />
        <Menu />
      </div>
    </ThemeProvider>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <SideDrawer />
        <Search />
        <Route path="/stock/:symbol" exact={true}>
          <View />
        </Route>
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;
