import React from 'react';
import LiveTable from './LiveTable';

export default class MainPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Bitlytics</h1>
        <LiveTable />
      </div>
    );
  }
}
