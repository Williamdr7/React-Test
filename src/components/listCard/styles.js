import { makeStyles } from "@material-ui/core";

const ListStyles = makeStyles((theme) => ({
  listContainer: {
    textAlign: ({ viewType }) => (viewType === "list" ? "initial" : "center"),
    marginTop: "20px",
    display: ({ viewType }) => (viewType === "list" ? "flex" : "block"),
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: ({ viewType }) => viewType && "0",
    },
  },
  descriptionContainer: {
    margin: ({ viewType }) =>
      viewType === "list" ? "20px 0 20px 40px" : "20px 0",
    textAlign: "initial",
  },
  itemImg: {
    width: "130px",
    height: "200px",
    textAlign: ({ viewType }) => (viewType === "list" ? "none" : "center"),
    [theme.breakpoints.down("sm")]: {
      width: "70px",
      height: "100px",
    },
  },
  titleContainer: {
    display: ({ viewType }) => (viewType === "list" ? "flex" : "block"),
    alignItems: "center",
  },
  bookTitle: {
    fontWeight: "bold",
    fontSize: "16px",
  },
  authorDescription: {
    fontStyle: "italic",
    fontSize: "12px",
    marginLeft: ({ viewType }) => (viewType === "grid" ? "0" : "12px"),
  },
  descriptionFooter: {
    paddingTop: "10px",
    color: "#0E1337",
    fontWeight: "300",
  },
  buyButton: {
    marginTop: "10px",
    padding: "10px",
    textTransform: "none",
    borderRadius: "50px",
  },
  bookDescription: {
    marginTop: "10px",
    height: ({ viewType }) => (viewType === "list" ? "auto" : "100px"),
  },
  starIcon: {
    marginLeft: "10px",
    width: "15px",
    height: "15px",
  },
}));

export default ListStyles;
