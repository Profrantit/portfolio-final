import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Card, Grid } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import CardActionArea from "@material-ui/core/CardActionArea";

import uxMobile from "../images/ux-mobile.jpg";
import GithubFiles from "../images/gihubFiles.jpg";
import Gang from "../images/fitgang.png";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: 200
  },
  this: {
    color: "#6c63ff",
    paddingTop: "100px",
    paddingBottom: "100px"
  },
  img: {
    width: "100%",
    height: "auto"
  }
});
export default function Below() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <br />
      <Container maxWidth="lg">
        <Grid item>
          <Typography component="div">
            {" "}
            <Typography className={classes.this} variant="h3">
              <strong>My recent work</strong>
            </Typography>
          </Typography>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Grid item>
            <div className="boxAnimate">
              <Card className={classes.root}>
                <CardActionArea>
                  <div className="img__wrap">
                    {" "}
                    <img
                      alt="ganfit-site"
                      class="img__img"
                      style={{ height: "auto", width: "100%" }}
                      src={Gang}
                    />
                    <p className="img__description">
                      <a
                        alt="next-app"
                        style={{ textDecoration: "none", color: "white" }}
                        href="https://fit-gang.vercel.app/"
                      >
                        My Next/Contentful app
                      </a>
                    </p>
                  </div>
                </CardActionArea>
              </Card>
            </div>
          </Grid>
          <Grid item>
            <div className="boxAnimate">
              <Card className={classes.root}>
                <CardActionArea>
                  <div className="img__wrap">
                    <img
                      alt="files"
                      className="img_img"
                      style={{ height: "auto", width: "100%" }}
                      src={GithubFiles}
                    />
                    <p className="img__description">
                      {" "}
                      <a
                        alt="github"
                        style={{ textDecoration: "none", color: "white" }}
                        href="https://github.com/Profrantit/Fitter"
                      >
                        Strapi/React project files
                      </a>
                    </p>
                  </div>
                </CardActionArea>
              </Card>
            </div>
          </Grid>
          <Grid item>
            <div className="boxAnimate">
              <Card className={classes.root}>
                <CardActionArea>
                  <div className="img__wrap">
                    <img
                      alt="ux"
                      className="img_img"
                      style={{ height: "auto", width: "100%" }}
                      src={uxMobile}
                    />
                    <p className="img__description">
                      <a
                        style={{ textDecoration: "none", color: "white" }}
                        href="https://www.figma.com/proto/yKTmbEXW2Cn83FfxO8u03i/Untitled?node-id=208%3A1314"
                      >
                        Figma design/UX project
                      </a>
                    </p>
                  </div>
                </CardActionArea>
              </Card>
            </div>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
