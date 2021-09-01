import {
  AppBar,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React, { useContext } from "react";
import TopStyles from "./styles";
import FormatAlignJustifyIcon from "@material-ui/icons/FormatAlignJustify";
import AppsIcon from "@material-ui/icons/Apps";
import DataContext from "../../context/DataContext";

export default function TopBar({ title }) {
  const classes = TopStyles();
  const context = useContext(DataContext);
  function handleViewType(value) {
    context.setViewType(value);
  }

  const handleRangeChange = (event) => {
    context.setRange(event.target.value);
  };
  return (
    <AppBar className={classes.appBarContainer} position="static">
      <Toolbar className={classes.barContainer}>
        <div className={classes.titleContainer}>
          <Typography className={classes.title} variant="h4" noWrap>
            {title}
          </Typography>
        </div>
        <div className={classes.viewIcons}>
          <Typography className={classes.rangeText} variant="inherit" noWrap>
            Exibir
            <Select
              className={classes.select}
              labelId="range-label"
              id="range-select"
              value={context.range}
              onChange={handleRangeChange}
            >
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={15}>15</MenuItem>
            </Select>
            <Typography
              className={classes.rangeDescription}
              variant="inherit"
              noWrap
            >
              por vez
            </Typography>
          </Typography>

          <FormatAlignJustifyIcon
            onClick={() => handleViewType("list")}
            className={
              context.viewType === "list"
                ? classes.selectedListIcon
                : classes.listIcon
            }
          />
          <AppsIcon
            className={
              context.viewType === "grid"
                ? classes.selectedGridIcon
                : classes.gridIcon
            }
            onClick={() => handleViewType("grid")}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
}
