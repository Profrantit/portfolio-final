import "./index.css";

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ThirdPage from "./pages/ThirdPage";
import EmptyPage from "./pages/EmptyPage";
import ContactPage from "./pages/ContactPage";
import Navigation from "./components/Navigation";
import TravMedia from "./components/TravMedia";
import { makeStyles } from "@material-ui/core/styles";

import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AppBar from "@material-ui/core/AppBar";
import Market from "./components/Market";
import HeroTest from "./components/HeroTest";
import Fixed from "./components/Fixed";
import Next from "./pages/Next";
import { borderBottom } from "@material-ui/system";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  margin: {
    margin: theme.spacing(1),
    textShadow: "none"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    float: "right",
    borderBottom: "1px blue solid"
  }
}));
export default function App() {
  const classes = useStyles();
  const preventDefault = event => event.preventDefault();
  return (
    <Router>
      <div>
        <AppBar
          boxShadow={0}
          style={{
            background: "transparent",
            textShadow: "none",
            boxShadow: "none"
          }}
          position="static"
        >
          <Toolbar>
            <IconButton
              style={{ color: "#6C63FF" }}
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            ></IconButton>
            <Typography className={classes.root}>
              <Link to="/EmptyPage">
                <Button
                  variant="text"
                  size="medium"
                  color="primary"
                  className={classes.title}
                >
                  ContactPage
                </Button>
              </Link>
              <Link to="/">
                <Button
                  variant="text"
                  size="medium"
                  color="primary"
                  className={classes.title}
                >
                  HomePage
                </Button>
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route path="/AboutPage">
            <AboutPage />
          </Route>
          <Route path="/ContactPage">
            <ContactPage />
          </Route>
          <Route path="/thirdPage">
            <ThirdPage />
          </Route>
          <Route path="/emptyPage">
            <EmptyPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
