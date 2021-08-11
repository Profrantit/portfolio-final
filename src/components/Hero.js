import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Image from "../images/AvatarMak.png";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    direction: "row",
    paddingTop: "2rem",

    "& > *": {
      margin: theme.spacing(1)
    },
    large: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: theme.spacing(7),
      height: theme.spacing(7)
    }
  }
}));
export default function Hero() {
  const classes = useStyles();
  return (
    <>
      <Container fixed>
        <Typography
          className="animate__animated animate__bounce"
          lg={12}
          style={{ fontWeight: "bold" }}
          variant="h3"
        >
          Front End Developer
        </Typography>
        <Typography variant="h5">I code, I review, I drink coffee</Typography>

        <img className="avatar" align="center" alt="avatar" src={Image} />
      </Container>
    </>
  );
}
