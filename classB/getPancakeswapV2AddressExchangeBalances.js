const { request } = require('../utils');

module.exports = (address, query = {}) => {
	const api = `/56/address/${address}/stacks/pancakeswap_v2/balances/`;

	return request(api, query);
};
