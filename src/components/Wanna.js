import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import Buttons from "./Contact";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  whole: {
    paddingTop: "100px",
    paddingBottom: "100px"
  },
  under: {
    paddingTop: "30px",
    paddingBottom: "30px"
  }
});
export default function Wanna() {
  const classes = useStyles();
  return (
    <Grid
      className={classes.whole}
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <Typography variant="h3">Wanna come in contact?</Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.under} variant="h6">
          Start a conversation!
        </Typography>
      </Grid>
      <Grid item>
        <div className="animate__animated animate__pulse repeat">
          <Buttons />
        </div>
      </Grid>
    </Grid>
  );
}
