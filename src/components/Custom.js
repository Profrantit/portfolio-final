import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const theme = createTheme({
  typography: {
    subtitle1: {
      fontSize: 20,
      color: "gray"
    },
    body1: {
      fontWeight: 500
    }
  }
});

export default function Custom() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography variant="subtitle1">subtitle</Typography>
        <Typography>body1</Typography>
        <Button>Button</Button>
      </ThemeProvider>
    </div>
  );
}
