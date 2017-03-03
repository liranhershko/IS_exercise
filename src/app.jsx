import React from 'react';
import Header from './header';
import Dashboard from './dashboard';
import '../styles/index.scss';

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
