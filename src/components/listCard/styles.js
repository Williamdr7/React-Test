import { makeStyles } from "@material-ui/core";

const ListStyles = makeStyles((theme) => ({
  listContainer: {
    textAlign: ({ viewType }) => (viewType === "list" ? "initial" : "center"),
    marginTop: "20px",
    display: ({ viewType }) => (viewType === "list" ? "flex" : "block"),
    lineHeight: "17px",
    fontSize: "14px",
    [theme.breakpoints.down("sm")]: {
      width: "85%",
      margin: ({ viewType }) => viewType && "auto",
      lineHeight: "15px",
      fontSize: "12px",
    },
  },
  descriptionContainer: {
    margin: ({ viewType }) =>
      viewType === "list" ? "20px 0 20px 40px" : "20px 0",
    textAlign: "initial",
    [theme.breakpoints.down("sm")]: {
      margin: ({ viewType }) =>
        viewType === "list" ? "20px 0 20px 20px" : "20px 0",
    },
  },
  itemImg: {
    width: "130px",
    height: "200px",
    textAlign: ({ viewType }) => (viewType === "list" ? "none" : "center"),
    [theme.breakpoints.down("sm")]: {
      margin: ({ viewType }) => (viewType === "list" ? "20px 0" : "20px 0"),
      width: "110px",
      height: "150px",
    },
  },
  titleContainer: {
    display: ({ viewType }) => (viewType === "list" ? "flex" : "block"),
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      display: ({ viewType }) => viewType && "block",
    },
  },
  bookTitle: {
    fontWeight: "bold",
    fontSize: "16px",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    [theme.breakpoints.down("md")]: {
      height: ({ viewType }) => (viewType === "list" ? "auto" : "40px"),
      fontSize: "14px",
    },
    [theme.breakpoints.up("md")]: {
      height: "auto",
    },
  },
  authorDescription: {
    fontStyle: "italic",
    fontSize: "14px",
    display: "flex",
    marginLeft: ({ viewType }) => (viewType === "grid" ? "0" : "12px"),
    [theme.breakpoints.down("sm")]: {
      height: "40px",
      marginLeft: ({ viewType }) => viewType && "0",
      fontSize: "12px",
    },
    [theme.breakpoints.up("sm")]: {
      height: ({ viewType }) => (viewType === "list" ? "auto" : "45px"),
    },
    [theme.breakpoints.up("xl")]: {
      height: ({ viewType }) => (viewType === "list" ? "auto" : "30px"),
    },
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
    [theme.breakpoints.up("sm")]: {
      height: ({ viewType }) => viewType && "220px",
    },
    [theme.breakpoints.up("md")]: {
      height: ({ viewType }) => (viewType === "list" ? "30px" : "130px"),
    },
    [theme.breakpoints.up("xl")]: {
      height: ({ viewType }) => (viewType === "list" ? "auto" : "100"),
    },
  },
  starIcon: {
    marginLeft: "10px",
    width: "15px",
    height: "15px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  buttonLink: {
    "&:hover": { textDecoration: "none" },
  },
}));

export default ListStyles;
