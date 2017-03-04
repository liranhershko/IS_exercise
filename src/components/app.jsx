import React from 'react';
import Header from './header/header';
import Dashboard from '../containers/dashboard';
import './app.scss';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Dashboard />
      </div>
    );
  }
}
