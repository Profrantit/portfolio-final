import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import design from "../images/sketch.png";
import code from "../images/frontEnd.png";
import sales from "../images/sales.png";
import { fontWeight } from "@material-ui/system";
const useStyles = makeStyles({
  root: {
    marginTop: "-120px",
    minwidth: "28rem"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 30,
    color: "black",
    fontWeight: " bold"
  },
  pos: {
    marginBottom: 12
  }
});

export default function HeroTest() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        className="row"
      >
        <Grid className="column" item lg={3} md={3} xs={12}>
          {" "}
          <Card id="card" className={classes.root} variant="outlined">
            <CardContent>
              <img className="icons" src={design} alt="design" />
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Design
              </Typography>
              <Typography variant="body1" component="p">
                I enjoy sitting, fine
              </Typography>
              <Typography variant="body1" component="p">
                picking color schemes and layout
              </Typography>
              <br />
              <Typography variant="body1" component="p">
                THis is what i enjoy
              </Typography>
              <Typography variant="body2" component="li">
                UX/UI
              </Typography>
              <Typography variant="body2" component="li"></Typography>
              <Typography variant="body2" component="li">
                item one
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid className="column" item lg={3} md={3} xs={12}>
          {" "}
          <Card id="card" className={classes.root} variant="outlined">
            <CardContent>
              <img className="icons" src={code} alt="code" />
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                FrontEnd
              </Typography>
              <Typography variant="body1" component="p">
                Everything from html to
              </Typography>
              <Typography variant="body1" component="p">
                React and such
              </Typography>
              <br />

              <Typography variant="body2" component="li">
                item one
              </Typography>
              <Typography variant="body2" component="li">
                item one
              </Typography>
              <Typography variant="body2" component="li">
                item one
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item className="column" lg={3} md={4} xs={12}>
          {" "}
          <Card id="card" className={classes.root} variant="outlined">
            <CardContent>
              <img className="icons" src={sales} alt="sales" />
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Sales
              </Typography>
              <Typography variant="body1" component="p">
                multiple classes in
              </Typography>
              <Typography variant="body1" component="p">
                macro and micro econ
              </Typography>
              <br />

              <Typography variant="body2" component="li">
                item one
              </Typography>
              <Typography variant="body2" component="li">
                item one
              </Typography>
              <Typography variant="body2" component="li">
                item one
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <div class="row">
        <div class="column">
          <div class="card">..</div>
        </div>
        <div class="column">
          <div class="card">..</div>
        </div>
        <div class="column">
          <div class="card">..</div>
        </div>
      </div>
    </>
  );
}
