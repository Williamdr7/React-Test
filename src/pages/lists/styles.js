import { makeStyles } from "@material-ui/core";

const ListsStyles = makeStyles((theme) => ({
  listsContainer: {
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
}));

export default ListsStyles;
