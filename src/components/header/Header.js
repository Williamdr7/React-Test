import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import StarIcon from "@material-ui/icons/Star";
import HeaderStyles from "./styles";

export default function Header() {
  const classes = HeaderStyles();

  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.headerContainer}>
          <div className={classes.titleContainer}>
            <Typography className={classes.title} variant="h4" noWrap>
              Bloom Books
            </Typography>
            <div className={classes.starIconMobile}>
              <StarIcon />
            </div>
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Pesquise aqui..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.starIconDesktop}>
            <StarIcon />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
