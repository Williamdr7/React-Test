import { makeStyles } from "@material-ui/core";

const NameStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    height: "90px",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      padding: "12px 16px",
      height: "auto",
      margin: "0",
    },
  },
  gridContainer: {
    display: ({ viewType }) => (viewType === "grid" ? "block" : "flex"),
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      textAlign: "initial",
    },
  },
  titleContainer: {
    alignItems: "end",
    fontSize: "18px",
    display: ({ viewType }) => (viewType === "grid" ? "block" : "flex"),
    [theme.breakpoints.down("sm")]: {
      display: ({ viewType }) => viewType && "block",
    },
  },
  updateDescription: {
    fontStyle: "italic",
    fontSize: "10px",
    lineHeight: "12px",
    marginTop: "auto",
    marginLeft: ({ viewType }) => (viewType === "grid" ? "0" : "12px"),
    [theme.breakpoints.down("sm")]: {
      marginLeft: ({ viewType }) => viewType && 0,
    },
  },
  descriptionText: {
    color: "#454A67",
    fontSize: "12px",
    textAlign: "right",
    marginTop: "12px",
    [theme.breakpoints.down("sm")]: {
      textAlign: "left",
    },
  },
  descriptionContainer: {
    marginTop: ({ viewType }) => viewType === "grid" && "12px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "12px",
    },
  },
}));

export default NameStyles;
