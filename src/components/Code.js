import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography, Container } from "@material-ui/core";
import Design from "../images/web-design.png";
import frontEnd from "../images/frontEnd.png";
import design from "../images/sketch.png";
import sales from "../images/sales.png";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function Code() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Typography
          component="div"
          style={{
            backgroundColor: "white",
            height: "100vh",
            margin: "-224px 0px 0px",
            border: "solid gray 1px",
            borderRadius: "25px"
          }}
        >
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <img className="icons" src={design} alt="design" />
              <Typography variant="h4">UX,UI,DESIGN</Typography>
            </Grid>
            <Grid className="offers" item xs={12} sm={12} md={4} lg={4}>
              <img className="icons" src={frontEnd} alt="frontEnd" />
              <Typography variant="h4"> REACT.JS</Typography>
              <ul>
                <li>item one</li>
                <li>item two</li>
                <li>item three</li>
                <li>item four</li>
              </ul>
            </Grid>
            <Grid className="offers" item xs={12} sm={12} md={4} lg={4}>
              <img className="icons" src={sales} alt="sales" />
              <Typography variant="h4"> BUISSNESS</Typography>
              <ul>
                <li>item one</li>
                <li>item two</li>
                <li>item three</li>
                <li>item four</li>
              </ul>
            </Grid>
          </Grid>
        </Typography>
      </Container>
    </div>
  );
}
