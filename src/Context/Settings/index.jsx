import React from 'react';
export const SettingsContext = React.createContext();

function SettingsProvider({ children }) {

  const [display, setDisplay] = React.useState(3);
  const [hideComplete, setHideComplete] = React.useState(true);
  return (
    <SettingsContext.Provider value={{ hideComplete,display, setDisplay,setHideComplete}}>
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider;
