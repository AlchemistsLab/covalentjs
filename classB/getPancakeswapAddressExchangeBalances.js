const { request } = require('../utils');

module.exports = (address, query = {}) => {
	const api = `/56/address/${address}/stacks/pancakeswap/balances/`;

	return request(api, query);
};
