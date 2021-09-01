import { Grid } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import React, { useContext, useEffect, useState } from "react";
import NameCard from "../../components/nameCard/NameCard";
import DataContext from "../../context/DataContext";
import NamesStyles from "./styles";
import TopBar from "../../components/topbar/TopBar";
import { configurePaginate } from "../../helpers/configurePaginate";
export default function Names() {
  const { names, viewType, filter, setFilter, ...context } =
    useContext(DataContext);
  const [page, setPage] = useState(1);
  const [currentNames, setCurrentNames] = useState([]);
  const [filteredNames, setFilteredNames] = useState([]);
  const classes = NamesStyles({ viewType });

  function handlePaginate(ev, value) {
    setPage(value);
  }

  useEffect(() => {
    setFilter("");
    setFilteredNames(names);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const newFilteredLists = names.filter((list) => {
      if (filter) {
        return list.list_name.toLowerCase().includes(filter.toLowerCase());
      } else return list;
    });
    setFilteredNames(newFilteredLists);
    configurePaginate(
      newFilteredLists,
      page,
      filter,
      setCurrentNames,
      setPage,
      context.range
    );
    if (filter) setPage(1);
  }, [filter, names, page, context.range]);
  useEffect(() => {
    configurePaginate(
      filteredNames,
      page,
      filter,
      setCurrentNames,
      setPage,
      context.range
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, context.range]);

  return (
    <div>
      <TopBar title="Gêneros" />
      <Grid
        justifyContent="space-evenly"
        container
        className={classes.namesContainer}
      >
        {currentNames.map((name) => {
          return (
            <Grid
              className={classes.gridItem}
              item
              sm={viewType === "list" ? 12 : 3}
              md={viewType === "list" ? 12 : 2}
              xl={viewType === "list" ? 12 : 2}
              xs={viewType === "list" ? 12 : 6}
            >
              <NameCard name={name} />
            </Grid>
          );
        })}
      </Grid>
      <Pagination
        variant="outlined"
        shape="rounded"
        className={classes.paginate}
        count={Math.ceil(filteredNames.length / context.range || 1) - 1 || 1}
        page={page}
        onChange={handlePaginate}
      />
    </div>
  );
}
