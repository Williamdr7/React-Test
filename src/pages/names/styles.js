import { makeStyles } from "@material-ui/core";

const NamesStyles = makeStyles((theme) => ({
  namesContainer: {
    display: ({ viewType }) => (viewType === "list" ? "block" : "flex"),
    margin: "auto",
    width: "78%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: ({ viewType }) => viewType && "0",
    },
  },
  paginate: {
    margin: "40px auto",
    display: "flex",
    textAlign: "center",
  },
  gridItem: {
    margin: "50px auto",
    [theme.breakpoints.down("sm")]: {
      margin: "0",
    },
  },
}));

export default NamesStyles;
