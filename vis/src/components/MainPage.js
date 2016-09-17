import React from 'react';
import LiveTable from './LiveTable';

export default class MainPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Bitnomics</h1>
        <LiveTable />
      </div>
    );
  }
}
