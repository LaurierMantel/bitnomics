'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _roachjs = require('roachjs');

var _roachjs2 = _interopRequireDefault(_roachjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var client = new _roachjs2.default({
	uri: '45.79.165.171:26257'
});

var utils = {
	getTransactions: function getTransactions() {
		console.log(client);
	}
};

exports.default = utils;