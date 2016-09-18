import React from 'react';
import utils from '../utils';
export default class LiveTable extends React.Component {

    getTransactions() {
        // utils.getTransactions(function(data) {
        //     console.log(data);
        // });
    }

    render() {
        this.getTransactions();
    	var rows = [];
    	for(var i = 0; i < 10; i++) {
    		rows.push(
    			<tr key={i}>
                  <td>blah</td>
                  <td>blue</td>
                  <td>bleep</td>
              </tr>
    		);
    	}
        return (
            <div>
              <table className='bit-table'>
                  <tbody>
                      <tr>
                        <th>Email Address</th>
                        <th>HTNNN</th>
                        <th>dafonisd </th>
                      </tr>
                      {rows}
                  </tbody>
              </table>
            </div>
        );
    }
}
