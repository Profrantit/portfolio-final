import React from "react";
import { Grid, Typography, TextField, Button } from "@material-ui/core";

export default function ContactComponent() {
  return (
    <div className="bod">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <form>
          <Grid item>
            <TextField label="Full Name" fullWidth autocomplete="none" />
          </Grid>
          <Grid item>
            <TextField label="Email" fullWidth autocomplete="none" />
          </Grid>
          <Grid item>
            <TextField
              label="Message"
              fullWidth
              multiline
              rows={5}
              autocomplete="none"
            />
          </Grid>
          <Grid item>
            <Button type="submit">Submit</Button>
          </Grid>
        </form>
      </Grid>
    </div>
  );
}
