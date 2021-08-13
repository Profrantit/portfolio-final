import React from "react";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#6c63ff"
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#ffcc00"
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2
  }
});
export default function Contact() {
  return (
    <>
      <div>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <br />

            <ThemeProvider theme={theme}>
              <Button
                className="animate__animated animate__pulse"
                border="red"
                size="large"
                variant="outlined"
                color="primary"
                href="/emptypage"
              >
                <span></span>
                <span> Contact me!</span>
              </Button>
            </ThemeProvider>
            <br />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
