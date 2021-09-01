import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import StarIcon from "@material-ui/icons/Star";
import HeaderStyles from "./styles";
import DataContext from "../../context/DataContext";

export default function Header() {
  const classes = HeaderStyles();
  const { filter, setFilter } = useContext(DataContext);

  function handleSearch(ev) {
    setFilter(ev.target.value);
  }
  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.headerContainer}>
          <div className={classes.titleContainer}>
            <Typography className={classes.title} variant="h4" noWrap>
              Bloom Books
            </Typography>
            <div className={classes.starIconMobile}>
              <StarIcon className={classes.startIcon} />
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
              value={filter}
              inputProps={{ "aria-label": "search" }}
              onChange={handleSearch}
            />
          </div>
          <div className={classes.starIconDesktop}>
            <StarIcon className={classes.startIcon} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
