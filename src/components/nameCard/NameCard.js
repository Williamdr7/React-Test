import { Grid, Typography } from "@material-ui/core";
import { Link } from "@material-ui/core";
import React, { useContext } from "react";
import NameStyles from "./styles";
import DataContext from "../../context/DataContext";

export default function NameCard({ name }) {
  const { viewType } = useContext(DataContext);
  const classes = NameStyles({ viewType });

  return (
    <div className={classes.root}>
      <Grid container className={classes.gridContainer}>
        <Grid
          item
          xs={viewType === "list" ? 12 : 10}
          sm={viewType === "list" ? 6 : 12}
        >
          <div className={classes.titleContainer}>
            <div>
              <Link underline="aways" href={`/lists#&name=${name.list_name}`}>
                {name.list_name}
              </Link>
            </div>
            <Typography
              className={classes.updateDescription}
              variant="inherit"
              color="textSecondary"
            >
              Atualizada em {name.newest_published_date}
            </Typography>
          </div>
        </Grid>
        <Grid
          className={classes.descriptionContainer}
          item
          xs={viewType === "list" ? 12 : 10}
          sm={viewType === "list" ? 3 : 12}
        >
          <Typography className={classes.descriptionText} variant="inherit">
            Última publicação: {name.newest_published_date}
          </Typography>
        </Grid>
        <Grid
          item
          xs={viewType === "list" ? 12 : 10}
          sm={viewType === "list" ? 3 : 12}
        >
          <Typography className={classes.descriptionText} variant="inherit">
            Última publicação: {name.oldest_published_date}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
