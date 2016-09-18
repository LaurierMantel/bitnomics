import React from 'react';
import roach from '../roach';
export default React.createClass({
    getInitialState() {
    	return {
    	    rows: []
    	};
    },

    componentDidMount() {
        console.log('fuck');
    	this.getTransactions();
    },

    getTransactions() {
	   console.log('lets get it');
        roach.getTransactions(function(err, rows) {
            if (err) {
                console.log(err);
                return;
            }
	        console.log('dofibsinoniofsni', rows);
            this.setState({rows:rows});
        });
    },

    render() {
	let rows = [];
	console.log(this.state.rows);
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
});
