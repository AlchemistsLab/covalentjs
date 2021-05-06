const { request } = require('../utils');

module.exports = (address, query = {}) => {
	const api = `/1/address/${address}/stacks/uniswap_v2/balances/`;

	return request(api, query);
};
