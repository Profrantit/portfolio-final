import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

import design from "../images/sketch.png";
const useStyles = makeStyles({
  root: {
    maxWidth: 412,
    fontWeight: "bold",
    maxHeight: 500
  },
  title: {
    color: "#7971ff",
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: '"roboto"'
  },
  text: {
    color: "gray",
    fontWeight: "bold",
    fontFamily: "roboto"
  },
  sub: {
    fontSize: 20,
    color: "black",

    fontFamily: "Noto Sans JP"
  }
});
export default function Random() {
  const classes = useStyles();
  return (
    <>
      <Grid
        style={{ marginTop: "-100px" }}
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Grid item>
          <Card className={classes.root}>
            <CardActionArea>
              <img className="icons" src={design} alt="design" />
              <CardContent>
                <Typography
                  className={classes.title}
                  gutterBottom
                  variant="h4"
                  component="h2"
                >
                  Design
                </Typography>
                <Typography
                  className={classes.text}
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  I spend alot of time in the css files and learing diffrent
                  frameworks are libraries to match whatever Js framework i'm
                  currently working with, to that end i wanna explore all
                  possible ways to desing
                </Typography>
                <br />
                <Typography
                  className={classes.title}
                  variant="h5"
                  component="p"
                >
                  What i enjoy:
                </Typography>
                <br />
                <Typography
                  variant="body2"
                  component="li"
                  className={classes.sub}
                >
                  UX/UI
                </Typography>
                <Typography
                  className={classes.sub}
                  variant="body2"
                  component="li"
                >
                  Icons/Logos
                </Typography>
                <Typography
                  className={classes.sub}
                  variant="body2"
                  component="li"
                >
                  Webb
                </Typography>
                <br />
                <Typography
                  className={classes.title}
                  variant="h5"
                  component="p"
                >
                  Tools:
                </Typography>
                <br />
                <Typography
                  className={classes.sub}
                  variant="body2"
                  component="li"
                >
                  Figma
                </Typography>
                <Typography
                  className={classes.sub}
                  variant="body2"
                  component="li"
                >
                  Adobe
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.root}>
            <CardActionArea>
              <img className="icons" src={design} alt="design" />
              <CardContent>
                <Typography
                  className={classes.title}
                  gutterBottom
                  variant="h4"
                  component="h2"
                >
                  Front End
                </Typography>
                <Typography
                  className={classes.text}
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  I spend most of my days working with React.js and vanila js, i
                  enjoy learing diffrent framworks, such as Vue, although i have
                  a deeper intresst for mobile first and React Native
                </Typography>
                <br />
                <Typography
                  className={classes.title}
                  variant="h5"
                  component="p"
                >
                  What i enjoy:
                </Typography>
                <br />
                <Typography
                  className={classes.sub}
                  variant="body2"
                  component="li"
                >
                  HTML/CSS
                </Typography>
                <Typography
                  className={classes.sub}
                  variant="body2"
                  component="li"
                >
                  Vanila Js, React.js
                </Typography>
                <Typography
                  className={classes.sub}
                  variant="body2"
                  component="li"
                >
                  Next.js, Contentful, Nuxt.js etc..
                </Typography>
                <br />
                <Typography
                  className={classes.title}
                  variant="h5"
                  component="p"
                >
                  Tools:
                </Typography>
                <br />
                <Typography
                  className={classes.sub}
                  variant="body2"
                  component="li"
                >
                  VScode
                </Typography>
                <Typography
                  className={classes.sub}
                  variant="body2"
                  component="li"
                >
                  Google
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.root}>
            <CardActionArea>
              <img className="icons" src={design} alt="design" />
              <CardContent>
                <Typography
                  className={classes.title}
                  gutterBottom
                  variant="h4"
                  component="h2"
                >
                  Business
                </Typography>
                <Typography
                  className={classes.text}
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Other than my time as a developer I have alot of experince
                  with sales, i have studied econ at univerity, also marketing
                  and communications, but i do enjoy computers more that money,
                  this made me change
                </Typography>
                <br />
                <Typography
                  className={classes.title}
                  variant="h5"
                  component="p"
                >
                  What i enjoy:
                </Typography>
                <br />
                <Typography
                  className={classes.sub}
                  variant="body2"
                  component="li"
                >
                  Marketing
                </Typography>
                <Typography
                  className={classes.sub}
                  variant="body2"
                  component="li"
                >
                  Sales
                </Typography>
                <Typography
                  className={classes.sub}
                  variant="body2"
                  component="li"
                >
                  Learing
                </Typography>
                <br />
                <Typography
                  className={classes.title}
                  variant="h5"
                  component="h4"
                >
                  Tools:
                </Typography>
                <br />
                <Typography
                  className={classes.sub}
                  variant="body2"
                  component="li"
                >
                  Google analytics
                </Typography>
                <Typography
                  className={classes.sub}
                  variant="body2"
                  component="li"
                >
                  Trends
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
