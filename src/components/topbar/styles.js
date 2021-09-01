import { makeStyles } from "@material-ui/core";

const TopStyles = makeStyles((theme) => ({
  appBarContainer: {
    backgroundColor: "#F2F3F8",
    boxShadow: "none",
  },
  barContainer: {
    height: "48px",
    width: "78%",
    display: "flex",
    color: "#010311",
    shadow: "none",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      height: "48px",
      width: "90%",
    },
  },
  viewIcons: {
    display: "flex",
    fontSize: "12px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "600",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  select: {
    fontSize: "12px",
    margin: "0 8px",
  },
  rangeText: {
    marginRight: "43px",
    [theme.breakpoints.down("sm")]: {
      marginRight: "8px",
    },
  },
  titleContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  listIcon: {
    width: "27px",
    height: "30px",
  },
  gridIcon: {
    width: "30px",
    height: "30px",
  },
  selectedListIcon: {
    width: "27px",
    height: "30px",
    color: "#5062F0",
  },
  selectedGridIcon: {
    width: "30px",
    height: "30px",
    color: "#5062F0",
  },
  rangeDescription: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export default TopStyles;
