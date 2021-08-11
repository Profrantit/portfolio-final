import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AppBar from "@material-ui/core/AppBar";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  margin: {
    margin: theme.spacing(1)
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  }
}));
export default function Navigation() {
  const classes = useStyles();

  return (
    <AppBar
      boxShadow={0}
      style={{ background: "transparent", boxShadow: "none" }}
      position="static"
    >
      <Toolbar>
        <IconButton
          style={{ color: "#6C63FF" }}
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon style={{ color: "#6C63FF" }} />
        </IconButton>
        <Typography className={classes.root}>
          <Link to="/AboutPage">
            <Button
              variant="text"
              size="medium"
              color="primary"
              className={classes.margin}
            >
              HomePage
            </Button>
          </Link>
          <Link to="/">
            <Button
              variant="text"
              size="medium"
              color="primary"
              className={classes.margin}
            >
              HomePage
            </Button>
          </Link>
          <Link to="/ThirdPage">
            <Button
              variant="text"
              size="medium"
              color="primary"
              className={classes.margin}
            >
              ThirdPage
            </Button>
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
