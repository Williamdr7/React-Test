import React, { useEffect, useState } from "react";
import DataService from "../services/list.service";

const DataContext = React.createContext();

function DataContextProvider({ children }) {
  const [names, setNames] = useState([]);
  const [lists, setLists] = useState([]);
  const [viewType, setViewType] = useState("list");
  const [range, setRange] = useState(5);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchNames();
    fetchLists();
    setFavorites(JSON.parse(localStorage.getItem("favorites")) || []);
  }, []);

  function editFavorite(title, action) {
    const itemIndex = favorites.findIndex((value) => value === title);
    if (action === "create" && itemIndex === -1) {
      const newFavorites = [...favorites, title];
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      setFavorites(newFavorites);
    } else {
      console.log(title, action, itemIndex);
      localStorage.setItem(
        "favorites",
        JSON.stringify(favorites.splice(itemIndex, 1))
      );
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
        setRange,
        setViewType,
        editFavorite,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;

export { DataContextProvider };
