import { makeStyles } from "@material-ui/core";

const HeaderStyles = makeStyles((theme) => ({
  headerContainer: {
    display: "flex",
    padding: "5px 0",
    height: "60px",
    alignItems: "center",
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      padding: "12px 16px",
      height: "90px",
    },
  },
  title: {
    fontSize: "32px",
    fontWeight: "600",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      fontSize: "24px",
    },
  },
  search: {
    borderRadius: "32px",
    position: "relative",
    backgroundColor: "#ffffff",
    marginRight: theme.spacing(2),
    width: "388px",
    color: "#9296AC",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginTop: "8px",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    color: "#0B1A8E",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    color: "#0B1A8E",
    width: "400px",
    height: "25px",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  starIconDesktop: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  starIconMobile: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  starIcon: {
    width: "24px",
    height: "23px",
  },
  titleContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

export default HeaderStyles;
