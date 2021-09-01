import Routes from "./routes";
import { DataContextProvider } from "./context/DataContext";
import MuiThemeContext from "./context/ThemeContext";

function App() {
  return (
    <MuiThemeContext>
      <DataContextProvider>
        <Routes />
      </DataContextProvider>
    </MuiThemeContext>
  );
}

export default App;
