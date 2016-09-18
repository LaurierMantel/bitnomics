import React from 'react';
import roach from '../roach';
export default class LiveTable extends React.Component {

    getInitialState() {
        rows: []
    }

    getTransactions() {
        roach.getTransactions(function(err, rows) {
            if (err) {
                console.log(err);
                return;
            }
            this.setState({rows:rows});
        });
    }

    render() {
        this.getTransactions();
    	var rows = [];
    	for(var i = 0; i < this.state.rows.length; i++) {
    		rows.push(
    			<tr key={i}>
                    <td>this.state.rows[i].hash</td>
                    <td>this.state.rows[i].amount</td>
                    <td>this.state.rows[i].publish_time</td>
                </tr>
    		);
    	}
        return (
            <div>
              <table className='bit-table'>
                  <tbody>
                      <tr>
                        <th>Hash</th>
                        <th>Amount</th>
                        <th>Time of Transaction</th>
                      </tr>
                      {rows}
                  </tbody>
              </table>
            </div>
        );
    }
}
