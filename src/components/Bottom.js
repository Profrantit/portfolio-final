import React from "react";

import { Grid, Typography } from "@material-ui/core";

export default function Bottom() {
  return (
    <Grid
      className="footer"
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <Typography variant="body2">
          Powered by: React.js, Material.ui
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1">Made by: Axel Lorén</Typography>
      </Grid>
    </Grid>
  );
}
