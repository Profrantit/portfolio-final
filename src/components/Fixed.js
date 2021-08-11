import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Code from "./Code";
import { Grid } from "@material-ui/core";
import HeroTest from "./HeroTest";

export default function Fixed() {
  return (
    <>
      <div
        className="above"
        style={{ backgroundColor: "#6C63FF", width: "100%", height: "100vh" }}
      >
        <Grid container>
          <Grid item xs={12} lg={12}>
            <Typography
              variant="h3"
              style={{
                paddingTop: "100px",
                color: "white",
                marginBottom: "1.5rem ",
                textAlign: "center",
                fontWeight: "bold"
              }}
            >
              Hi! Im Axel
            </Typography>
          </Grid>
          <Grid item xs={12} lg={4}></Grid>
          <Grid item xs={12} lg={4}>
            <Typography
              className="text"
              variant="h6"
              style={{
                color: "white",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              I spend most of my days infront of a montior, fixing code,
              designing new sites, or writing some code. in my free time i like
              to spend atleast 1-2 hours of it in the gym everyday. For the most
              part if i dont have anything to do after that, such as meeting
              friends, i tend to spend most of it playing computer games or
              watching some Lord of the rings lore on my ipad.
            </Typography>
          </Grid>
          <Grid item xs={12} lg={4}></Grid>
        </Grid>
        <br />
      </div>
    </>
  );
}
