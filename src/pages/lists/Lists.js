import { Grid } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import React, { useContext, useEffect, useState } from "react";
import ListCard from "../../components/listCard/ListCard";
import DataContext from "../../context/DataContext";
import ListsStyles from "./styles";
import TopBar from "../../components/topbar/TopBar";
import { configurePaginate } from "../../helpers/configurePaginate";

export default function Lists() {
  const { lists, viewType, filter, setFilter, ...context } =
    useContext(DataContext);
  const [page, setPage] = useState(1);
  const [currentLists, setCurrentLists] = useState([]);
  const [filteredLists, setFilteredLists] = useState([]);
  const classes = ListsStyles({ viewType });

  function handlePaginate(ev, value) {
    setPage(value);
  }

  useEffect(() => {
    setFilter("");
    setFilteredLists(lists);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const newFilteredLists = lists.filter((list) => {
      if (filter) {
        return list.book_details[0].title
          .toLowerCase()
          .includes(filter.toLowerCase());
      } else return list;
    });
    setFilteredLists(newFilteredLists);
    configurePaginate(
      newFilteredLists,
      page,
      filter,
      setCurrentLists,
      setPage,
      context.range
    );

    if (filter) setPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lists, filter]);

  useEffect(() => {
    configurePaginate(
      filteredLists,
      page,
      filter,
      setCurrentLists,
      setPage,
      context.range
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, context.range]);

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
              sm={viewType === "list" ? 12 : 3}
              md={viewType === "list" ? 12 : 2}
              xl={viewType === "list" ? 12 : 2}
              xs={viewType === "list" ? 12 : 6}
            >
              <ListCard item={item} />
            </Grid>
          );
        })}
      </Grid>
      <Pagination
        className={classes.paginate}
        count={Math.ceil(filteredLists.length / context.range || 1) - 1 || 1}
        page={page}
        onChange={handlePaginate}
      />
    </div>
  );
}
