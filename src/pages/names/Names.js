import { Grid } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import React, { useContext, useEffect, useState } from "react";
import NameCard from "../../components/nameCard/NameCard";
import DataContext from "../../context/DataContext";
import NamesStyles from "./styles";
import TopBar from "../../components/topbar/TopBar";
export default function Names() {
  const { names, viewType, ...context } = useContext(DataContext);
  const [page, setPage] = useState(1);
  const [currentNames, setCurrentNames] = useState([]);
  const classes = NamesStyles({ viewType });

  function handlePaginate(ev, value) {
    setPage(value);
  }

  useEffect(() => {
    if (page && names && names.length) {
      const firstIndex = context.range * page;
      const lastIndex = firstIndex + context.range;
      const newNames = names.slice(firstIndex, lastIndex);

      setCurrentNames(newNames);
    }
  }, [names, page, context.range]);

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
              sm={viewType === "list" ? 12 : 2}
              xs={6}
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
        count={Math.ceil(names.length / context.range) - 1}
        page={page}
        onChange={handlePaginate}
      />
    </div>
  );
}
