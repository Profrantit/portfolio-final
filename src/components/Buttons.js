import React from "react";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Git from "../images/Git.png";
import { ThemeProvider } from "@material-ui/styles";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  whole: {
    paddingTop: "100px",
    paddingBottom: "100px"
  },

  img: {
    width: "100%",
    height: "auto"
  }
});
export default function Buttons() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.whole}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Grid item>
            <br />

            <ThemeProvider>
              <Button
                className="animate__animated animate__bounce animate__delay-2s"
                border="red"
                size="large"
                variant="outlined"
                color="primary"
                href="https://github.com/Profrantit?tab=repositories"
              >
                <span>
                  <img alt="git" src={Git} className="git" />
                </span>
                <span> Find more on my Github!</span>
              </Button>
            </ThemeProvider>
            <br />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
