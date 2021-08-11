import React from "react";
import { Grid, Typography, FormLabel, Input } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    borderSizing: "border-box",
    background: "#94bde7",
    color: "485e74",
    lineHeight: "1.6",
    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
    padding: "1em"
  },
  body: {
    boxShadow: "0 0 20px 0 rgba(72, 94, 116, 0.7)",
    maxWidth: "1170px",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "1em"
  },
  item: {
    padding: "1em"
  },

  title: {
    textAlign: "center"
  },
  ul: {
    listStyle: "none",
    padding: "0"
  },
  company: {
    background: "red"
  },
  typography: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  }
}));
export default function TravMedia() {
  const classes = useStyles();
  return (
    <>
      <Grid
        className={classes.root}
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid container className={classes}>
          <Grid item lg={12}>
            <Typography className={classes.title} variant="h4">
              <span style={{ color: "white", fontWeight: "bold" }}> Axel</span>{" "}
              Front End
            </Typography>
          </Grid>
          <Typography className={classes.ul} variant="body1" component="ul">
            <Typography className={classes.li} variant="body1" component="li">
              Attundagränd 3
            </Typography>
            <Typography className={classes.li} variant="body1" component="li">
              070 5950 831
            </Typography>
            <Typography className={classes.li} variant="body1" component="li">
              axel.loren@gmail.com
            </Typography>
          </Typography>
        </Grid>{" "}
        <Grid item className={classes.item}>
          <Typography className={classes.item} variant="h5">
            Email me:
          </Typography>
          <form>
            <Typography className={classes.item}>
              <FormLabel>Name:</FormLabel>
              <Input name="name" type="text"></Input>
            </Typography>
            <Typography className={classes.item}>
              <FormLabel>Company:</FormLabel>
              <Input name="name" type="text"></Input>
            </Typography>
            <Typography className={classes.item}>
              <FormLabel>Email:</FormLabel>
              <Input name="EmailAdress" type="email"></Input>
            </Typography>
            <Typography className={classes.item}>
              <FormLabel>PhoneNumber:</FormLabel>
              <Input name="Phone" type="text"></Input>
            </Typography>
            <Typography className={classes.item}>
              <FormLabel>Message:</FormLabel>
              <textArea name="message" rows="5"></textArea>
            </Typography>
          </form>
        </Grid>
      </Grid>
    </>
  );
}
