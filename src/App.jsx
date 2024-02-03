import { useEffect, useMemo, useState } from "react";
import "./App.css";
import AppRouter from "./router/router"
import { useAuth } from "./hooks/useAuth";
import { SearchContext } from "./context/searchContext";

function App() {
  const { auth } = useAuth();
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => auth(), []);

  const contextValue = useMemo(
    () => ({
      searchValue,
      setSearchValue,
    }),
    [searchValue, setSearchValue]
  );

  return (
    <SearchContext.Provider value={contextValue}>
      <AppRouter />
    </SearchContext.Provider>
    
  );
}

export default App;
