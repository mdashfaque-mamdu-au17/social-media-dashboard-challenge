import React, { useContext, useState } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);
  const changeTheme = () => {
    setTheme(!theme);
  };
  return (
    <AppContext.Provider value={{ theme, changeTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
