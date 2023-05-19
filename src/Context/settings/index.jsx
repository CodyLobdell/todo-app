import React from 'react';
export const SettingsContext = React.createContext();

function SettingsProvider({ children }) {

  const [display, setDisplay] = React.useState(3);
  const [hideComplete, setHideComplete] = React.useState(true);
  const [sort, setSort] = React.useState('high');

  const initialState = {
    display: 3,
    hideComplete: 'false',
    sort: 'noSort',
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'changeSettings':
        let newSettings = {
          ...state,
          display: action.payload.displayItemBox.value,
          hideComplete: action.payload.sohwCompleted.value,
          sort: action.payload.sort.value
        };
        console.log('23', newSettings);
        // localStorage.setItem('userSettings', JSON.stringify(newSettings));
        return newSettings;
      default:
        return state;
    }
  }
  const [state, dispatch] = React.useReducer(reducer, initialState);


  // Implement a useEffect() (or componentDidMount()) in your context to read from local storage and set the values for those 2 state properties on application load.

  const changeSettings = (event) => {
    event.preventDefault();
    dispatch({
      type: 'changeSettings',
      payload: event.target.elements
    });
  }
  //   Create a function in your context that saves user preferences (for the above) to local storage.
  const getMySettings = () => {
    let settingsLocal = JSON.parse(localStorage.getItem('userSettings'));
    return settingsLocal;
  }

  return (
    <SettingsContext.Provider value={{ state, changeSettings, getMySettings, hideComplete, display, setDisplay, setHideComplete }}>
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider;

