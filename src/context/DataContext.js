import React, { useEffect, useState } from "react";
import DataService from "../services/list.service";

const DataContext = React.createContext();

function DataContextProvider({ children }) {
  const [names, setNames] = useState([]);
  const [lists, setLists] = useState([]);
  const [viewType, setViewType] = useState("list");
  const [range, setRange] = useState(5);
  const [favorites, setFavorites] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetchNames();
    fetchLists();
    setFavorites(JSON.parse(localStorage.getItem("favorites")) || []);
  }, []);

  function editFavorite(title, action) {
    const itemIndex = favorites.findIndex((value) => value === title);
    if (action === "create" && itemIndex === -1) {
      const newFavoritesAdd = [...favorites, title];
      localStorage.setItem("favorites", JSON.stringify(newFavoritesAdd));
      setFavorites(newFavoritesAdd);
    } else if (action === "remove") {
      const newFavoritesDel = favorites.filter((item) => item !== title);
      localStorage.setItem("favorites", JSON.stringify(newFavoritesDel));
      setFavorites(newFavoritesDel);
    }
  }

  async function fetchNames() {
    DataService.getNames().then(({ data }) => {
      setNames(data.results);
    });
  }

  async function fetchLists() {
    DataService.getLists().then(({ data }) => {
      setLists(data.results);
    });
  }

  return (
    <DataContext.Provider
      value={{
        names,
        lists,
        viewType,
        range,
        favorites,
        filter,
        setRange,
        setViewType,
        editFavorite,
        setFilter,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;

export { DataContextProvider };
