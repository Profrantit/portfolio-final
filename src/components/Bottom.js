import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FolderIcon from "@material-ui/icons/Folder";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 500
  }
});

export default function Bottom() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
