import { makeStyles } from "@material-ui/core";

const ListsStyles = makeStyles((theme) => ({
  listsContainer: {
    display: ({ viewType }) => (viewType === "list" ? "block" : "flex"),
    margin: "auto",
    width: "78%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: ({ viewType }) => viewType && "auto",
    },
  },
  paginate: {
    margin: "40px auto",
    display: "flex",
    textAlign: "center",
  },
  gridItem: {
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      margin: "0 auto 0 0",
    },
  },
}));

export default ListsStyles;
