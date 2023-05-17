import React from 'react';
import SettingsProvider from './Context/Settings';
import Todo from './Components/Todo';

export default class App extends React.Component {
  render() {
    return (
      <SettingsProvider>
        <Todo />

      </SettingsProvider>
    );
  }
}