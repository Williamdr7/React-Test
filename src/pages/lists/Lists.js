import { Grid } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import React, { useContext, useEffect, useState } from "react";
import ListCard from "../../components/listCard/ListCard";
import DataContext from "../../context/DataContext";
import ListsStyles from "./styles";
import TopBar from "../../components/topbar/TopBar";

export default function Lists() {
  const { lists, viewType, ...context } = useContext(DataContext);
  const [page, setPage] = useState(1);
  const [currentLists, setCurrentLists] = useState([]);
  const classes = ListsStyles({ viewType });

  function handlePaginate(ev, value) {
    setPage(value);
  }

  useEffect(() => {
    if (page && lists && lists.length) {
      const firstIndex = page - 1;
      const lastIndex = firstIndex + context.range;
      const newLists = lists.slice(firstIndex, lastIndex);

      console.log("firstIndex", firstIndex);

      setCurrentLists(newLists);
    }
  }, [lists, page, context.range]);

  // eslint-disable-next-line no-redeclare
  function handlePaginate(_ev, value) {
    setPage(value);
  }

  return (
    <div>
      <TopBar title="Hardcover Fiction" />
      <Grid
        justifyContent="space-evenly"
        container
        className={classes.listsContainer}
      >
        {currentLists.map((item) => {
          return (
            <Grid
              className={classes.gridItem}
              item
              sm={viewType === "list" ? 12 : 2}
              xs={6}
            >
              <ListCard item={item} />
            </Grid>
          );
        })}
      </Grid>
      <Pagination
        className={classes.paginate}
        count={Math.ceil(lists.length / context.range) - 1}
        page={page}
        onChange={handlePaginate}
      />
    </div>
  );
}
