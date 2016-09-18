'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _roach = require('../roach');

var _roach2 = _interopRequireDefault(_roach);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
    getInitialState: function getInitialState() {
        return {
            rows: []
        };
    },
    componentDidMount: function componentDidMount() {
        this.getTransactions();
    },
    getTransactions: function getTransactions() {
        console.log('lets get it');
        _roach2.default.getTransactions(function (err, rows) {
            if (err) {
                console.log(err);
                return;
            }
            console.log('dofibsinoniofsni', rows);
            this.setState({ rows: rows });
        });
    },
    render: function render() {
        var rows = [];
        console.log(this.state.rows);
        for (var i = 0; i < this.state.rows.length; i++) {
            rows.push(_react2.default.createElement(
                'tr',
                { key: i },
                _react2.default.createElement(
                    'td',
                    null,
                    'this.state.rows[i].hash'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    'this.state.rows[i].amount'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    'this.state.rows[i].publish_time'
                )
            ));
        }
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'table',
                { className: 'bit-table' },
                _react2.default.createElement(
                    'tbody',
                    null,
                    _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                            'th',
                            null,
                            'Hash'
                        ),
                        _react2.default.createElement(
                            'th',
                            null,
                            'Amount'
                        ),
                        _react2.default.createElement(
                            'th',
                            null,
                            'Time of Transaction'
                        )
                    ),
                    rows
                )
            )
        );
    }
});